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
    subtitleField({ 
      title: 'Subtitle', 
      initialValue: 'Why Choose Us' 
    }),
    titleField({ 
      title: 'Section Title', 
      initialValue: 'Where Compassion Meets Expertise.' 
    }),
    descriptionField({ 
      title: 'Description', 
      initialValue: 'We believe healthcare is not just about treating illnesses—it\'s about caring for people. With a perfect balance of compassion and expertise, our team is dedicated to providing exceptional medical care while ensuring every patient feels valued and understood.' 
    }),
    imageField({ 
      name: 'image', 
      title: 'Main Image' 
    }),
    defineField({
      name: 'logoImage',
      title: 'Logo Image (overlay)',
      type: 'image',
      description: 'Small logo that appears in the credential card',
    }),
    defineField({
      name: 'circleImage',
      title: 'Circle Decoration Image',
      type: 'image',
      description: 'Decorative background image for the logo circle',
    }),
    defineField({
      name: 'badgeText',
      title: 'Badge Text',
      type: 'string',
      description: 'Text displayed below the subtitle in the credential card',
      initialValue: 'Accredited healthcare advisory practice',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { 
              name: 'title', 
              title: 'Feature Title', 
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            { 
              name: 'description', 
              title: 'Feature Description', 
              type: 'text',
              validation: (Rule: any) => Rule.required(),
            },
            { 
              name: 'iconBgColor', 
              title: 'Icon Background Color', 
              type: 'string', 
              initialValue: '#F05DA8',
              description: 'Hex color code (e.g., #F05DA8)',
            },
            { 
              name: 'svg', 
              title: 'SVG Icon Code', 
              type: 'text', 
              description: 'Paste your SVG icon code here. Use class="size-30" for sizing.',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
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
          description: 'We focus on holistic care that addresses physical, emotional, and mental well-being, ensuring you receive comprehensive support.',
          iconBgColor: '#58CBF2',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({ title, subtitle }: { title: string; subtitle: string }) {
      return {
        title: title || 'Why Choose Us',
        subtitle: subtitle || 'Section',
      };
    },
  },
});