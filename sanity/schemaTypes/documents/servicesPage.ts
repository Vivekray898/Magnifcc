// sanity/schemaTypes/documents/servicesPage.ts

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Services',
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'SEO title (if different from page title)',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'SEO description for the services page',
      initialValue: 'Explore our comprehensive healthcare services including hospital planning, medical equipment, NABH accreditation, and healthcare IT solutions.',
    }),
    defineField({
      name: 'heroSection',
      title: '🟣 Hero Section',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        { 
          name: 'title', 
          title: 'Hero Title', 
          type: 'string', 
          initialValue: 'Services' 
        },
        { 
          name: 'subtitle', 
          title: 'Breadcrumb Text', 
          type: 'string', 
          initialValue: 'Services' 
        },
        // NEW: Media Type Selector
        defineField({
          name: 'mediaType',
          title: 'Media Type',
          type: 'string',
          initialValue: 'image',
          options: {
            list: [
              { title: 'Image', value: 'image' },
              { title: 'YouTube Video', value: 'youtube' },
            ],
          },
          description: 'Choose whether to show an image or YouTube video',
        }),
        // Image (kept for backward compatibility)
        { 
          name: 'image', 
          title: 'Hero Image', 
          type: 'image', 
          options: { hotspot: true },
          description: 'Upload an image (used when Media Type is "Image")',
          hidden: ({ parent }: any) => parent?.mediaType !== 'image',
        },
        // NEW: YouTube Video Fields
        defineField({
          name: 'youtubeUrl',
          title: 'YouTube Video URL',
          type: 'url',
          description: 'Enter the YouTube video URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID)',
          placeholder: 'https://www.youtube.com/watch?v=VIDEO_ID',
          hidden: ({ parent }: any) => parent?.mediaType !== 'youtube',
        }),
        defineField({
          name: 'youtubeThumbnail',
          title: 'YouTube Thumbnail (Optional)',
          type: 'image',
          options: { hotspot: true },
          description: 'Optional: Upload a custom thumbnail. If not provided, YouTube will auto-generate one.',
          hidden: ({ parent }: any) => parent?.mediaType !== 'youtube',
        }),
        defineField({
          name: 'videoTitle',
          title: 'Video Title',
          type: 'string',
          description: 'Title text displayed on the video (for accessibility & SEO)',
          placeholder: 'Introduction to Our Services',
          hidden: ({ parent }: any) => parent?.mediaType !== 'youtube',
        }),
      ],
    }),
    // Services Section Settings
    defineField({
      name: 'servicesSection',
      title: '📋 Services Section',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
          initialValue: '# Our Services',
          description: 'The subtitle above the services grid (e.g., "# Our Services")',
        }),
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Our Medical Services.',
          description: 'The main title for the services section',
        }),
        defineField({
          name: 'showPagination',
          title: 'Show Pagination',
          type: 'boolean',
          initialValue: true,
          description: 'Show pagination controls if there are more than 6 services',
        }),
        defineField({
          name: 'servicesPerPage',
          title: 'Services Per Page',
          type: 'number',
          initialValue: 6,
          description: 'Number of services to show per page (default: 6)',
        }),
      ],
    }),
  ],
});