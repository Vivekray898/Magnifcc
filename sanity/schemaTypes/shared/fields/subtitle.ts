// sanity/schemaTypes/shared/fields/subtitle.ts
import { defineField } from 'sanity';

export const subtitleField = (options?: { 
  title?: string; 
  initialValue?: string;
}) => defineField({
  name: 'subtitle',
  title: options?.title || 'Subtitle',
  type: 'string',
  initialValue: options?.initialValue || '',
});