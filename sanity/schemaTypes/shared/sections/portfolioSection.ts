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
      name: 'displayCount',
      title: 'Number of Items to Display',
      type: 'number',
      description: 'Leave empty or set to 0 to display all portfolio items',
      initialValue: 0,
      validation: Rule => Rule.min(0),
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'string',
      options: {
        list: [
          { title: 'Newest First', value: 'newest' },
          { title: 'Oldest First', value: 'oldest' },
          { title: 'Alphabetical (A-Z)', value: 'az' },
          { title: 'Alphabetical (Z-A)', value: 'za' },
        ],
      },
      initialValue: 'newest',
    }),
  ],
});