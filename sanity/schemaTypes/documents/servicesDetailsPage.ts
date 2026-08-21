// sanity/schemaTypes/documents/servicesDetailsPage.ts

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'servicesDetailsPage',
  title: 'Services Details Page Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Services Details',
    }),
    defineField({
      name: 'heroSection',
      title: '🟣 Hero Section',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        { name: 'title', title: 'Hero Title', type: 'string', initialValue: 'Services Details' },
        { name: 'subtitle', title: 'Breadcrumb Text', type: 'string', initialValue: 'Services Details' },
        { name: 'image', title: 'Hero Image', type: 'image', options: { hotspot: true } },
      ],
    }),
  ],
});