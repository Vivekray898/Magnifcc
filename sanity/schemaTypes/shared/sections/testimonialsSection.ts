// sanity/schemaTypes/shared/sections/testimonialsSection.ts
import { defineField } from 'sanity';
import { titleField } from '../fields/title';
import { subtitleField } from '../fields/subtitle';

export const testimonialsSection = defineField({
  name: 'testimonialsSection',
  title: '⭐ Testimonials Section',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    subtitleField({ title: 'Subtitle', initialValue: '# Testimonials' }),
    titleField({ title: 'Section Title', initialValue: 'What Our Patients Say?' }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'role', title: 'Role', type: 'string' },
            { name: 'avatar', title: 'Avatar Image', type: 'image', options: { hotspot: true } },
            { name: 'text', title: 'Testimonial Text', type: 'text' },
            { name: 'rating', title: 'Rating (1-5)', type: 'number', validation: Rule => Rule.min(1).max(5), initialValue: 5 },
          ],
        },
      ],
    }),
  ],
});