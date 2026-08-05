// sanity/schemaTypes/shared/fields/description.ts
import { defineField } from 'sanity';

export const descriptionField = (options?: { 
  title?: string; 
  initialValue?: string;
  rows?: number;
}) => defineField({
  name: 'description',
  title: options?.title || 'Description',
  type: 'text',
  rows: options?.rows || 3,
  initialValue: options?.initialValue || '',
});