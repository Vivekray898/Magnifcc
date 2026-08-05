// sanity/components/IconPicker.tsx

import React, { useState, useMemo } from 'react';
import { Card, Grid, Stack, Text, Box, Button, Badge, Flex, TextInput } from '@sanity/ui';
import { set, unset } from 'sanity';
import iconsData from '../data/icons.json';

interface IconPickerProps {
  value?: string;
  onChange?: (value: any) => void;
}

export default function IconPicker(props: IconPickerProps) {
  const { value, onChange } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(iconsData.icons.map(icon => icon.category))];
    return cats;
  }, []);

  // Filter icons
  const filteredIcons = useMemo(() => {
    let filtered = iconsData.icons;
    
    // Filter by search
    if (searchTerm) {
      filtered = filtered.filter(icon => 
        icon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        icon.value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(icon => icon.category === selectedCategory);
    }
    
    return filtered;
  }, [searchTerm, selectedCategory]);

  const handleSelect = (iconValue: string) => {
    onChange?.(iconValue === value ? unset() : set(iconValue));
  };

  const selectedIcon = iconsData.icons.find(i => i.value === value);

  // Simple SVG preview (you can customize these)
  const getIconPreview = (iconValue: string) => {
    // Return a simple colored circle with the first letter
    const icon = iconsData.icons.find(i => i.value === iconValue);
    if (!icon) return '?';
    return icon.title.charAt(0).toUpperCase();
  };

  return (
    <Stack space={4}>
      {/* Header */}
      <Box>
        <Text size={1} weight="semibold" muted>
          Select an icon
        </Text>
        <Text size={1} muted>
          Click an icon to select it. Click again to deselect.
        </Text>
      </Box>

      {/* Selected icon preview */}
      {selectedIcon && (
        <Box padding={3} style={{ background: '#f0f4ff', borderRadius: '8px' }}>
          <Flex align="center" gap={3}>
            <Box style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '8px',
              background: '#2276fc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '18px'
            }}>
              {selectedIcon.title.charAt(0).toUpperCase()}
            </Box>
            <Box>
              <Text weight="semibold">{selectedIcon.title}</Text>
              <Text size={1} muted>Value: {selectedIcon.value}</Text>
            </Box>
            <Button 
              mode="bleed" 
              tone="critical" 
              fontSize={1} 
              padding={2}
              onClick={() => onChange?.(unset())}
            >
              Clear
            </Button>
          </Flex>
        </Box>
      )}

      {/* Search */}
      <Box>
        <TextInput
          placeholder="Search icons..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.currentTarget.value)}
          clearable
        />
      </Box>

      {/* Category Filter */}
      <Box>
        <Flex gap={2} wrap="wrap">
          {categories.map((cat) => (
            <Button
              key={cat}
              mode={selectedCategory === cat ? 'default' : 'ghost'}
              tone={selectedCategory === cat ? 'primary' : 'default'}
              fontSize={1}
              padding={2}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </Flex>
      </Box>

      {/* Icon Grid */}
      <Grid columns={[3, 4, 5]} gap={2}>
        {filteredIcons.map((icon) => {
          const isSelected = value === icon.value;
          const initial = icon.title.charAt(0).toUpperCase();

          return (
            <Card
              key={icon.value}
              padding={3}
              radius={2}
              shadow={isSelected ? 2 : 0}
              tone={isSelected ? 'primary' : 'default'}
              style={{
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: isSelected ? '2px solid #2276fc' : '2px solid transparent',
                background: isSelected ? 'rgba(34, 118, 252, 0.08)' : 'white',
                minHeight: '70px'
              }}
              onClick={() => handleSelect(icon.value)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Stack space={1} align="center">
                <Box style={{ 
                  width: '36px', 
                  height: '36px', 
                  borderRadius: '8px',
                  background: isSelected ? '#2276fc' : '#e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isSelected ? 'white' : '#374151',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}>
                  {initial}
                </Box>
                <Text size={0} align="center" weight={isSelected ? 'semibold' : 'regular'}>
                  {icon.title}
                </Text>
                {isSelected && (
                  <Badge tone="primary" style={{ fontSize: '8px' }}>
                    ✓
                  </Badge>
                )}
              </Stack>
            </Card>
          );
        })}
      </Grid>

      {/* Footer */}
      <Box paddingTop={2}>
        <Text size={1} muted>
          {filteredIcons.length} icons found
        </Text>
      </Box>
    </Stack>
  );
}