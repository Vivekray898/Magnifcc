// sanity/schemaTypes/shared/sections/brandLogosSection.ts
import { defineField, defineType } from 'sanity';

export const brandLogosSection = defineType({
  name: 'brandLogosSection',
  title: 'Brand Logos Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Optional section title',
    }),
    defineField({
      name: 'brands',
      title: 'Brands',
      type: 'array',
      of: [
        defineField({
          name: 'brand',
          title: 'Brand',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Brand Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'logo',
              title: 'Brand Logo',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                }),
              ],
            }),
            defineField({
              name: 'url',
              title: 'Website URL',
              type: 'url',
              description: 'Optional link to brand website',
            }),
          ],
          preview: {
            select: {
              title: 'name',
              media: 'logo',
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
      count: 'brands',
    },
    prepare({ title, count }) {
      return {
        title: title || 'Brand Logos Section',
        subtitle: `${count?.length || 0} brands`,
      };
    },
  },
});