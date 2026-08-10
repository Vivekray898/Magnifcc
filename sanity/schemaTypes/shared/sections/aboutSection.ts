// sanity/schemaTypes/shared/sections/aboutSection.ts

import { defineField } from 'sanity';
import { titleField } from '../fields/title';
import { subtitleField } from '../fields/subtitle';
import { descriptionField } from '../fields/description';
import { imageField } from '../fields/image';

export const aboutSection = defineField({
  name: 'aboutSection',
  title: '🔵 About Section',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    subtitleField({ 
      title: 'Subtitle', 
      initialValue: '# Dental About Us' 
    }),
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      initialValue: 'Where Your Oral Health Comes First.',
    }),
    descriptionField({ 
      title: 'Description', 
      initialValue: 'Health is our top priority. We are dedicated to providing personalized, high-quality dental care in a warm and welcoming environment. Whether you need preventive care, restorative treatments, or cosmetic enhancements.' 
    }),
    imageField({ 
      name: 'image', 
      title: 'Main Image' 
    }),
    defineField({
      name: 'plusImage',
      title: 'Plus Decoration Image',
      type: 'image',
      description: 'A decorative plus/cross image that appears centered over the main image',
    }),
    defineField({
      name: 'dotsImage',
      title: 'Dots Decoration Image',
      type: 'image',
      description: 'A decorative dots image that appears in the bottom-right corner',
    }),
    defineField({
      name: 'featuresList',
      title: 'Features List',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        'Comprehensive Services',
        'Community Focused',
        'Modern Technology',
        'Trusted Legacy',
        'Commitment to Comfort',
        'Sustainability in Care'
      ],
    }),
  ],
});