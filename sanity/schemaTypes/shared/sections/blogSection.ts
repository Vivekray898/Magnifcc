// sanity/schemaTypes/shared/sections/blogSection.ts

import { defineField } from 'sanity';
import { titleField } from '../fields/title';
import { subtitleField } from '../fields/subtitle';

export const blogSection = defineField({
  name: 'blogSection',
  title: '📝 Blog Section',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    subtitleField({ title: 'Subtitle', initialValue: '# blog' }),
    titleField({ title: 'Section Title', initialValue: 'Our Medical Blog.' }),
    // REMOVED: posts array - now fetched from blogPost documents
    defineField({
      name: 'viewAllText',
      title: 'View All Button Text',
      type: 'string',
      initialValue: 'View All Blog',
    }),
    defineField({
      name: 'viewAllLink',
      title: 'View All Button Link',
      type: 'string',
      initialValue: '/blog',
    }),
  ],
});