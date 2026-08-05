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
        defineField({
          name: 'shapeImages',
          title: 'Shape Images',
          type: 'object',
          fields: [
            { name: 'shape1', title: 'Shape 1', type: 'image' },
            { name: 'shape2', title: 'Shape 2', type: 'image' },
            { name: 'shape3', title: 'Shape 3', type: 'image' },
            { name: 'shape4', title: 'Shape 4', type: 'image' },
            { name: 'shape5', title: 'Shape 5', type: 'image' },
          ],
        }),
      ],
    }),
  ],
});