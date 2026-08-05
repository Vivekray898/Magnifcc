// sanity/schemaTypes/shared/sections/marqueeSection.ts
import { defineField } from 'sanity';

export const marqueeSection = defineField({
  name: 'marqueeItems',
  title: '🟡 Marquee Items (Sliding Text)',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    defineField({
      name: 'items',
      title: 'Marquee Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'text', title: 'Text', type: 'string' },
            { name: 'icon', title: 'Icon Image', type: 'image' },
          ],
        },
      ],
      initialValue: [
        { text: 'Medical group' },
        { text: 'Core Services' },
        { text: 'Technology' },
        { text: 'Health blogs' },
      ],
    }),
  ],
});