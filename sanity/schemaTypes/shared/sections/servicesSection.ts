// sanity/schemaTypes/shared/sections/servicesSection.ts

import { defineField } from 'sanity';
import { titleField } from '../fields/title';
import { subtitleField } from '../fields/subtitle';

export const servicesSection = defineField({
  name: 'servicesSection',
  title: '🟢 Services Section',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    subtitleField({ title: 'Subtitle', initialValue: '# Our Services' }),
    titleField({ title: 'Section Title', initialValue: 'Our Medical Services.' }),
    defineField({
      name: 'services',
      title: 'Services List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { 
              name: 'title', 
              title: 'Service Title', 
              type: 'string' 
            },
            { 
              name: 'description', 
              title: 'Description', 
              type: 'text' 
            },
            { 
              name: 'number', 
              title: 'Number (01, 02, 03, etc.)', 
              type: 'number',
              description: 'Enter a number like 1, 2, 3... It will be shown as 01, 02, 03',
              validation: Rule => Rule.min(1).max(99)
            },
            { 
              name: 'iconBgColor', 
              title: 'Number Background Color', 
              type: 'string', 
              initialValue: '#F05DA8',
              description: 'e.g., #F05DA8 or rgb(240,93,193)'
            },
            { 
              name: 'iconShadow', 
              title: 'Shadow Color', 
              type: 'string', 
              initialValue: 'rgba(240,93,168,0.4)',
              description: 'e.g., rgba(240,93,168,0.4)'
            },
            { 
              name: 'link', 
              title: 'Link', 
              type: 'string', 
              initialValue: 'services-details.html' 
            },
          ],
        },
      ],
    }),
  ],
});