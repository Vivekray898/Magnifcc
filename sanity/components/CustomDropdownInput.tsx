// sanity/components/CustomDropdownInput.tsx

import React, { useState, useEffect, useMemo } from 'react';
import { type StringInputProps, set, useClient } from 'sanity';
import { Stack, Select, TextInput, Button, Flex, Text, Card } from '@sanity/ui';

// Default values - these are suggestions, not validations
const DEFAULT_SUGGESTIONS: Record<string, string[]> = {
  department: [
    'Hospital Planning & Design',
    'Architecture & Infrastructure Development',
    'Project Management Consultancy (PMC)',
    'Hospital Operations & Management Consulting',
    'Hospital Financial Consultancy',
    'Bio-Medical Equipment Consulting',
    'Human Resource (HR) Consultancy',
    'Quality Assurance & Accreditation (NABH, NABL, JCI, NQAS)',
    'Training & Capacity Building / Academics',
    'Public Health Consultancy',
    'Healthcare IT Solutions (HIS / LMIS / EMR)',
    'Branding, Digital Marketing & Event Management',
    'Revenue Cycle Management (Billing & Accounting)',
  ],
  location: [
    'Siliguri (Corporate/Head Office)',
    'Field / On-Site (For Greenfield & Brownfield project execution)',
    'Remote / Hybrid (Applicable for IT, Digital Health & Advisory roles)',
  ],
  jobType: [
    'Full-Time',
    'Part-Time',
    'Contractual / Project-Based',
    'Advisory / Consultancy',
    'Internship / Trainee',
  ],
};

export function CustomDropdownInput(props: StringInputProps) {
  const { value, onChange, path } = props;
  const client = useClient({ apiVersion: '2024-01-01' });
  
  // Get field name from path
  const fieldName = useMemo(() => {
    const pathArray = Array.isArray(path) ? path : [];
    return pathArray.filter(p => typeof p === 'string').pop() || 'unknown';
  }, [path]);

  const [customValues, setCustomValues] = useState<string[]>([]);
  const [newValue, setNewValue] = useState('');
  const [showDeleteMode, setShowDeleteMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const defaultSuggestions = DEFAULT_SUGGESTIONS[fieldName] || [];

  // Load custom values from Sanity
  useEffect(() => {
    const loadCustomValues = async () => {
      try {
        setLoading(true);
        const result = await client.fetch(
          `*[_type == "siteSettings"][0]{
            customDropdownValues
          }`
        );
        
        if (result?.customDropdownValues) {
          const values = result.customDropdownValues[fieldName] || [];
          setCustomValues(values);
        }
      } catch (error) {
        console.error('Error loading custom values:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCustomValues();
  }, [client, fieldName]);

  // Save custom values to Sanity
  const saveCustomValues = async (values: string[]) => {
    try {
      const currentSettings = await client.fetch(
        `*[_type == "siteSettings"][0]{
          _id,
          customDropdownValues
        }`
      );

      if (!currentSettings) {
        await client.create({
          _type: 'siteSettings',
          customDropdownValues: {
            [fieldName]: values,
          },
        });
      } else {
        const updatedCustomValues = {
          ...(currentSettings.customDropdownValues || {}),
          [fieldName]: values,
        };

        await client
          .patch(currentSettings._id)
          .set({ customDropdownValues: updatedCustomValues })
          .commit();
      }
    } catch (error) {
      console.error('Error saving custom values:', error);
      alert('Failed to save custom value. Please try again.');
    }
  };

  // All options for display (default suggestions + custom values)
  const allOptions = useMemo(() => {
    const combined = [...defaultSuggestions, ...customValues];
    // Remove duplicates case-insensitively
    return Array.from(
      new Map(combined.map(v => [v.toLowerCase(), v])).values()
    );
  }, [defaultSuggestions, customValues]);

  // Handle dropdown change
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(set(selectedValue));
  };

  // Handle add new value
  const handleAddValue = async () => {
    if (!newValue || !newValue.trim()) {
      alert('Please type a value first.');
      return;
    }
    
    const trimmed = newValue.trim();
    
    // Check for duplicates (case-insensitive)
    const exists = customValues.some(v => v.toLowerCase() === trimmed.toLowerCase()) ||
                   defaultSuggestions.some(v => v.toLowerCase() === trimmed.toLowerCase());
    
    if (exists) {
      alert('This value already exists in the list.');
      return;
    }
    
    // Add to custom values
    const updatedValues = [...customValues, trimmed];
    setCustomValues(updatedValues);
    await saveCustomValues(updatedValues);
    
    // Set as current value
    onChange(set(trimmed));
    
    // Clear input
    setNewValue('');
  };

  // Handle delete custom value
  const handleDeleteValue = async (valueToDelete: string) => {
    if (confirm(`Delete "${valueToDelete}" from custom values?`)) {
      const updatedValues = customValues.filter(v => v !== valueToDelete);
      setCustomValues(updatedValues);
      await saveCustomValues(updatedValues);
      
      // If the deleted value was currently selected, clear the field
      if (value === valueToDelete) {
        onChange(set(''));
      }
    }
  };

  // Handle Enter key
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAddValue();
    }
  };

  // Toggle delete mode
  const toggleDeleteMode = () => {
    setShowDeleteMode(!showDeleteMode);
  };

  if (loading) {
    return <Text size={1} muted>Loading...</Text>;
  }

  return (
    <Stack space={3}>
      {/* Dropdown with all values */}
      <Select
        value={value || ''}
        onChange={handleSelectChange}
      >
        <option value="">Select a value...</option>
        {allOptions.map((option) => (
          <option key={option} value={option}>
            {option}
            {customValues.includes(option) && ' ✏️'}
          </option>
        ))}
      </Select>

      {/* Add new value */}
      <Flex gap={2}>
        <TextInput
          value={newValue}
          onChange={(e) => setNewValue(e.currentTarget.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type new value..."
          style={{ flex: 1 }}
        />
        <Button
          mode="ghost"
          tone="primary"
          onClick={handleAddValue}
          disabled={!newValue || !newValue.trim()}
          text="Add"
        />
      </Flex>

      {/* Custom values management */}
      {customValues.length > 0 && (
        <Card padding={3} tone="caution" border radius={2}>
          <Flex align="center" justify="space-between" marginBottom={2}>
            <Text size={1} weight="semibold">
              Custom Values ({customValues.length})
            </Text>
            <Button
              mode="bleed"
              tone={showDeleteMode ? "critical" : "default"}
              onClick={toggleDeleteMode}
              text={showDeleteMode ? "Done" : "Manage"}
              size="small"
            />
          </Flex>
          
          {showDeleteMode ? (
            <Stack space={2}>
              {customValues.map((val) => (
                <Card key={val} padding={2} border radius={2}>
                  <Flex align="center" justify="space-between">
                    <Text size={1}>{val}</Text>
                    <Button
                      tone="critical"
                      mode="ghost"
                      onClick={() => handleDeleteValue(val)}
                      text="Delete"
                      size="small"
                    />
                  </Flex>
                </Card>
              ))}
            </Stack>
          ) : (
            <Text size={1} muted>
              Click "Manage" to delete custom values
            </Text>
          )}
        </Card>
      )}
    </Stack>
  );
}