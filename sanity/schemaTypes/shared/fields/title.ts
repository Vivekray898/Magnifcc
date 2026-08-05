// sanity/schemaTypes/shared/fields/title.ts
import { defineField } from 'sanity';

export const titleField = (options?: { 
  title?: string; 
  initialValue?: string;
  required?: boolean;
}) => defineField({
  name: 'title',
  title: options?.title || 'Title',
  type: 'string',
  validation: options?.required !== false ? Rule => Rule.required() : undefined,
  initialValue: options?.initialValue || '',
});