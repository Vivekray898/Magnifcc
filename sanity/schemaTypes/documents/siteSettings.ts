// sanity/schemaTypes/documents/siteSettings.ts

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      initialValue: 'Madula - Health & Medical',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        { 
          name: 'title', 
          title: 'SEO Title', 
          type: 'string',
          description: 'Page title for search results (if different from site title)'
        },
        { 
          name: 'description', 
          title: 'Meta Description', 
          type: 'text',
          description: 'Description for search results',
          initialValue: 'Madula is a modern Health & Medical Tailwind CSS Template built for clinics, hospitals, and healthcare professionals.'
        },
        { 
          name: 'keywords', 
          title: 'Meta Keywords', 
          type: 'text',
          description: 'Comma separated keywords for SEO',
          initialValue: 'Madula, health website template, medical Tailwind CSS template, responsive medical design, doctor clinic website, healthcare template, hospital HTML site, medical UI, Tailwind HTML template, medical dashboard, modern health UI, clinic website template'
        },
        { 
          name: 'ogTitle', 
          title: 'Open Graph Title', 
          type: 'string',
          description: 'Title for social media sharing',
          initialValue: 'Madula – Health & Medical Tailwind CSS Template | Dexignlab'
        },
        { 
          name: 'ogDescription', 
          title: 'Open Graph Description', 
          type: 'text',
          description: 'Description for social media sharing',
          initialValue: 'Madula is a clean and responsive medical website template built with Tailwind CSS. Perfect for clinics, hospitals, and healthcare professionals.'
        },
        { 
          name: 'ogImage', 
          title: 'Open Graph Image', 
          type: 'image',
          description: 'Image for social media sharing (1200x630 recommended)',
          options: { hotspot: true }
        },
        { 
          name: 'ogUrl', 
          title: 'Open Graph URL', 
          type: 'url',
          description: 'Canonical URL for social media sharing',
          initialValue: 'https://madula.dexignlab.com/tailwind/'
        },
        { 
          name: 'twitterCard', 
          title: 'Twitter Card Type', 
          type: 'string',
          options: {
            list: [
              { title: 'Summary', value: 'summary' },
              { title: 'Summary Large Image', value: 'summary_large_image' },
              { title: 'App', value: 'app' },
              { title: 'Player', value: 'player' },
            ]
          },
          initialValue: 'summary_large_image'
        },
        { 
          name: 'twitterTitle', 
          title: 'Twitter Title', 
          type: 'string',
          description: 'Title for Twitter sharing (if different from OG title)'
        },
        { 
          name: 'twitterDescription', 
          title: 'Twitter Description', 
          type: 'text',
          description: 'Description for Twitter sharing (if different from OG description)'
        },
        { 
          name: 'twitterImage', 
          title: 'Twitter Image', 
          type: 'image',
          description: 'Image for Twitter sharing (if different from OG image)',
          options: { hotspot: true }
        },
        { 
          name: 'favicon', 
          title: 'Favicon', 
          type: 'image',
          description: 'Favicon image (ico or png)',
          options: { hotspot: true }
        },
      ],
    }),
  ],
});