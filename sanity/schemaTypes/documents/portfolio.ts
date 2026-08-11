// /sanity/schemaTypes/documents/portfolio.ts
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule: any) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Sustainability Goals', value: 'Sustainability Goals' },
          { title: 'Health Education', value: 'Health Education' },
          { title: 'Medical Innovation', value: 'Medical Innovation' },
          { title: 'Community Health', value: 'Community Health' },
          { title: 'Dental Facility', value: 'Dental Facility' },
          { title: 'Smile Makeover', value: 'Smile Makeover' },
          { title: 'Pediatric Dental', value: 'Pediatric Dental' },
          { title: 'Success Stories', value: 'Success Stories' },
          { title: 'Dental Implant', value: 'Dental Implant' },
          { title: 'Digital Dentistry', value: 'Digital Dentistry' },
          { title: 'Patient Education', value: 'Patient Education' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
      description: 'Name of the client or project owner',
    }),
    defineField({
      name: 'timeframe',
      title: 'Timeframe',
      type: 'string',
      description: 'Project completion date or timeframe (e.g., "August 03, 2024")',
    }),
    defineField({
      name: 'websiteLink',
      title: 'Website Link',
      type: 'url',
      description: 'Link to the project or client website',
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      description: 'Custom banner image for this portfolio page (optional)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      description: 'Additional images for the portfolio gallery',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' },
      ],
      description: 'Rich text content for the portfolio detail page',
    }),
  ],
  orderings: [
    {
      title: 'Created Date, New',
      name: 'createdDateDesc',
      by: [{ field: '_createdAt', direction: 'desc' }],
    },
    {
      title: 'Title, A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
});