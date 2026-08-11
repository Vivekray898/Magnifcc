// sanity/schemaTypes/documents/servicesPage.ts

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Services',
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
        { name: 'title', title: 'Hero Title', type: 'string', initialValue: 'Services' },
        { name: 'subtitle', title: 'Breadcrumb Text', type: 'string', initialValue: 'Services' },
        { name: 'image', title: 'Hero Image', type: 'image', options: { hotspot: true } },
        // shapeImages removed - only text side floating icon remains in the component
      ],
    }),
    // REMOVED: servicesSection - no longer needed since we fetch from servicesDetails
  ],
});