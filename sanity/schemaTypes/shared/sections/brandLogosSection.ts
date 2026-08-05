// sanity/schemaTypes/shared/sections/brandLogosSection.ts

import { defineField } from 'sanity';

export const brandLogosSection = defineField({
  name: 'brands',
  title: '🏢 Brand Logos',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    defineField({
      name: 'logos',
      title: 'Brand Logos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { 
              name: 'name', 
              title: 'Brand Name', 
              type: 'string',
              validation: Rule => Rule.required()
            },
            { 
              name: 'logo', 
              title: 'Logo Image', 
              type: 'image', 
              options: { hotspot: true },
              validation: Rule => Rule.required()
            },
            { 
              name: 'url', 
              title: 'Website URL', 
              type: 'url' 
            },
          ],
        },
      ],
    }),
  ],
});