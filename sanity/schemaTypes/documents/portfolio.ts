// /sanity/schemaTypes/documents/portfolio.ts
export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
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
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'client',
      title: 'Client Name',
      type: 'string',
      description: 'Name of the client or project owner',
    },
    {
      name: 'timeframe',
      title: 'Timeframe',
      type: 'string',
      description: 'Project completion date or timeframe (e.g., "August 03, 2024")',
    },
    {
      name: 'websiteLink',
      title: 'Website Link',
      type: 'url',
      description: 'Link to the project or client website',
    },
    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      description: 'Custom banner image for this portfolio page (optional)',
      options: {
        hotspot: true,
      },
    },
    {
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
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' },
      ],
      description: 'Rich text content for the portfolio detail page',
    },
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
};