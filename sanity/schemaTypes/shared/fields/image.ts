// sanity/schemaTypes/shared/fields/image.ts
import { defineField } from 'sanity';

export const imageField = (options?: { 
  title?: string; 
  name?: string;
  hotspot?: boolean;
}) => defineField({
  name: options?.name || 'image',
  title: options?.title || 'Image',
  type: 'image',
  options: {
    hotspot: options?.hotspot !== false,
  },
});