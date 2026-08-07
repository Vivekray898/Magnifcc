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
      initialValue: 'Magnific Healthcare Solutions',
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        { 
          name: 'address', 
          title: 'Address', 
          type: 'text',
          initialValue: "Sarada Apartment, Opp. College Para Sishu Uddyan, Ashutosh Mukherjee Road, College Para, Siliguri – 734001"
        },
        { 
          name: 'phone', 
          title: 'Phone Number', 
          type: 'string',
          initialValue: "013 354 213 - 92132"
        },
        { 
          name: 'email', 
          title: 'Email Address', 
          type: 'string',
          initialValue: "info@magnifichcs.com"
        },
        { 
          name: 'whatsapp', 
          title: 'WhatsApp Number', 
          type: 'string'
        },
        { 
          name: 'socialLinks', 
          title: 'Social Media Links', 
          type: 'object',
          fields: [
            { name: 'facebook', title: 'Facebook', type: 'url' },
            { name: 'twitter', title: 'Twitter/X', type: 'url' },
            { name: 'instagram', title: 'Instagram', type: 'url' },
            { name: 'youtube', title: 'YouTube', type: 'url' },
            { name: 'linkedin', title: 'LinkedIn', type: 'url' },
          ]
        },
      ],
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
          initialValue: 'Magnific Healthcare Solutions is a leading healthcare infrastructure consultancy helping medical practitioners, hospital owners, and healthcare administrators plan, design, and deliver successful healthcare projects from ideation to final commissioning.'
        },
        { 
          name: 'keywords', 
          title: 'Meta Keywords', 
          type: 'text',
          description: 'Comma separated keywords for SEO',
          initialValue: 'Magnific Healthcare Solutions, healthcare infrastructure consultancy, hospital planning, design, commissioning, market feasibility studies, DPR, healthcare architecture, medical equipment planning, NABH accreditation, NABL accreditation, public health project management, healthcare event management, HIS, LMIS'
        },
        { 
          name: 'ogTitle', 
          title: 'Open Graph Title', 
          type: 'string',
          description: 'Title for social media sharing',
          initialValue: 'Magnific Healthcare Solutions – Healthcare Infrastructure Consultancy'
        },
        { 
          name: 'ogDescription', 
          title: 'Open Graph Description', 
          type: 'text',
          description: 'Description for social media sharing',
          initialValue: 'Magnific Healthcare Solutions is a leading healthcare infrastructure consultancy helping medical practitioners, hospital owners, and healthcare administrators plan, design, and deliver successful healthcare projects from ideation to final commissioning.'
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
          initialValue: 'https://magnifichcs.com/'
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