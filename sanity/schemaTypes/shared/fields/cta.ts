// sanity/schemaTypes/shared/fields/cta.ts
import { defineField } from 'sanity';

export const ctaField = (options?: { 
  text?: string; 
  link?: string;
  textLabel?: string;
  linkLabel?: string;
}) => defineField({
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: options?.textLabel || 'Button Text',
      type: 'string',
      initialValue: options?.text || 'Read More',
    }),
    defineField({
      name: 'link',
      title: options?.linkLabel || 'Button Link',
      type: 'string',
      initialValue: options?.link || 'about.html',
    }),
  ],
});