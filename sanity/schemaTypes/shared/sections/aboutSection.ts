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
    subtitleField({ title: 'Subtitle', initialValue: '# About Us' }),
    // Make sure this is 'heading' - NOT 'title'
    defineField({
      name: 'heading',  // ← This should be 'heading'
      title: 'Main Heading',
      type: 'string',
      initialValue: 'Excellence in Healthcare Rooted in Trust.',
    }),
    descriptionField({ 
      title: 'Description', 
      initialValue: 'For years, we\'ve dedicated ourselves to delivering exceptional medical care with integrity, compassion, and respect.' 
    }),
    imageField({ name: 'image1', title: 'First Image' }),
    imageField({ name: 'image2', title: 'Second Image' }),
    defineField({
      name: 'signatureImage',
      title: 'Signature Image',
      type: 'image',
    }),
    defineField({
      name: 'features',
      title: 'Features List',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        'Transforming healthcare experiences through',
        'Providing care with kindness and understanding',
        'Striving for the highest standards in every service',
        'Dedicated to improving public health outcomes'
      ],
    }),
    defineField({
      name: 'progressStats',
      title: 'Progress Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'percentage', title: 'Percentage', type: 'number', validation: Rule => Rule.min(0).max(100) },
            { name: 'label', title: 'Label', type: 'string' },
          ],
        },
      ],
      initialValue: [
        { percentage: 85, label: 'Qualified Doctors' },
        { percentage: 60, label: 'Open Communication' },
      ],
    }),
  ],
});