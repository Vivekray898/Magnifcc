// sanity/schemaTypes/documents/aboutPage.ts

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'About Us',
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
        { 
          name: 'title', 
          title: 'Hero Title', 
          type: 'string', 
          initialValue: 'About Us' 
        },
        { 
          name: 'subtitle', 
          title: 'Breadcrumb Text', 
          type: 'string', 
          initialValue: 'About Us' 
        },
        { 
          name: 'image', 
          title: 'Hero Image', 
          type: 'image',
          options: { hotspot: true }
        },
        // shapeImages removed - only text side floating icon remains in the component
      ],
    }),
    // You can add more sections here later
  ],
});