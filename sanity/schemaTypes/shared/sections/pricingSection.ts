// sanity/schemaTypes/shared/sections/pricingSection.ts

import { defineField } from 'sanity';
import { titleField } from '../fields/title';
import { subtitleField } from '../fields/subtitle';

export const pricingSection = defineField({
  name: 'pricingSection',
  title: '💰 Pricing Section',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    subtitleField({ title: 'Subtitle', initialValue: '# Pricing Table' }),
    titleField({ title: 'Section Title', initialValue: 'Flexible Options for Every Patient.' }),
    defineField({
      name: 'plans',
      title: 'Pricing Plans',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { 
              name: 'name', 
              title: 'Plan Name', 
              type: 'string',
              validation: Rule => Rule.required()
            },
            { 
              name: 'price', 
              title: 'Price', 
              type: 'string',
              validation: Rule => Rule.required()
            },
            { 
              name: 'currency', 
              title: 'Currency', 
              type: 'string', 
              initialValue: 'USD' 
            },
            { 
              name: 'features', 
              title: 'Features List', 
              type: 'array', 
              of: [{ type: 'string' }],
              validation: Rule => Rule.min(1)
            },
            { 
              name: 'isPopular', 
              title: 'Is Popular? (Featured Plan)', 
              type: 'boolean', 
              initialValue: false,
              description: 'Check this to make the plan featured (highlighted in pink)'
            },
            { 
              name: 'buttonText', 
              title: 'Button Text', 
              type: 'string', 
              initialValue: 'Pick This Package' 
            },
          ],
        },
      ],
    }),
  ],
});