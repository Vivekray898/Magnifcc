// sanity/schemaTypes/shared/sections/portfolioSection.ts
import { defineField } from 'sanity';
import { titleField } from '../fields/title';
import { subtitleField } from '../fields/subtitle';

export const portfolioSection = defineField({
  name: 'portfolioSection',
  title: '🟠 Portfolio Section',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    subtitleField({ title: 'Subtitle', initialValue: '# Medical Portfolio' }),
    titleField({ title: 'Section Title', initialValue: 'One Portfolio at a Time.' }),
    defineField({
      name: 'items',
      title: 'Portfolio Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'category', title: 'Category', type: 'string', initialValue: 'Sustainability Goals' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'link', title: 'Link', type: 'string', initialValue: 'portfolio-details.html' },
          ],
        },
      ],
    }),
  ],
});