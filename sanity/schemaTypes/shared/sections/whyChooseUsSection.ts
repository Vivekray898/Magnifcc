// sanity/schemaTypes/shared/sections/whyChooseUsSection.ts
import { defineField } from 'sanity';
import { titleField } from '../fields/title';
import { subtitleField } from '../fields/subtitle';
import { descriptionField } from '../fields/description';
import { imageField } from '../fields/image';

export const whyChooseUsSection = defineField({
  name: 'whyChooseUs',
  title: '🟣 Why Choose Us Section',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    subtitleField({ title: 'Subtitle', initialValue: '# Why Choose Us' }),
    titleField({ title: 'Section Title', initialValue: 'Where Compassion Meets Expertise.' }),
    descriptionField({ 
      title: 'Description', 
      initialValue: 'We believe healthcare is not just about treating illnesses—it\'s about caring for people. With a perfect balance of compassion and expertise, our team is dedicated to providing exceptional medical care while ensuring every patient.' 
    }),
    imageField({ name: 'image', title: 'Main Image' }),
    defineField({
      name: 'logoImage',
      title: 'Logo Image (overlay)',
      type: 'image',
    }),
    defineField({
      name: 'circleImage',
      title: 'Circle Decoration Image',
      type: 'image',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Feature Title', type: 'string' },
            { name: 'description', title: 'Feature Description', type: 'text' },
            { name: 'iconBgColor', title: 'Icon Background Color', type: 'string', initialValue: '#F05DA8' },
            { name: 'svg', title: 'SVG Icon Code', type: 'text', description: 'Paste your SVG icon code here' },
          ],
        },
      ],
      initialValue: [
        {
          title: 'Expert Professionals',
          description: 'Our highly skilled doctors, nurses, and specialists bring years of experience and a commitment to excellence in every service we provide.',
          iconBgColor: '#F05DA8',
        },
        {
          title: 'Beyond Treatments',
          description: 'Our highly skilled doctors, nurses, and specialists bring years of experience and a commitment to excellence in every service we provide.',
          iconBgColor: '#58CBF2',
        },
      ],
    }),
  ],
});