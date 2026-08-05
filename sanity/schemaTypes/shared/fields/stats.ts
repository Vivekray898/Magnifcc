// sanity/schemaTypes/shared/fields/stats.ts
import { defineField } from 'sanity';

export const statsField = (options?: { 
  title?: string; 
  initialValue?: Array<{ number: string; suffix: string; label: string }>;
}) => defineField({
  name: 'stats',
  title: options?.title || 'Statistics',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        { name: 'number', title: 'Number', type: 'string' },
        { name: 'suffix', title: 'Suffix (+, M+, etc.)', type: 'string' },
        { name: 'label', title: 'Label', type: 'string' },
      ],
    },
  ],
  initialValue: options?.initialValue || [
    { number: '500', suffix: '+', label: 'Patients Served' },
    { number: '2', suffix: 'M+', label: 'Reports Delivered' },
    { number: '100', suffix: '+', label: 'Expert Specialists' },
  ],
});