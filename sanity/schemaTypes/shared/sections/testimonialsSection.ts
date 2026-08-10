// sanity/schemaTypes/shared/sections/testimonialsSection.ts
import { defineField, defineType } from 'sanity';

export const testimonialsSection = defineType({
  name: 'testimonialsSection',  // This must match exactly
  title: 'Testimonials Section',
  type: 'document',  // Use 'document' instead of 'object'
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: '# Testimonials',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'What Our Patients Say?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        defineField({
          name: 'testimonial',
          title: 'Testimonial',
          type: 'object',
          fields: [
            defineField({
              name: 'content',
              title: 'Content',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'authorName',
              title: 'Author Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'authorRole',
              title: 'Author Role',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'authorImage',
              title: 'Author Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                }),
              ],
            }),
            defineField({
              name: 'rating',
              title: 'Rating',
              type: 'number',
              validation: (Rule) => Rule.min(1).max(5).required(),
              initialValue: 5,
            }),
          ],
          preview: {
            select: {
              title: 'authorName',
              subtitle: 'content',
              media: 'authorImage',
            },
          },
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Testimonials Section',
        subtitle: subtitle || 'What Our Patients Say?',
      };
    },
  },
});