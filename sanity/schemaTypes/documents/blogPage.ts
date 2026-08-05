// sanity/schemaTypes/documents/blogPage.ts

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'blogPage',
  title: 'Blog Page Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Our Blog',
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
        { name: 'title', title: 'Hero Title', type: 'string', initialValue: 'Our Blog' },
        { name: 'subtitle', title: 'Breadcrumb Text', type: 'string', initialValue: 'Our Blog' },
        { name: 'image', title: 'Hero Image', type: 'image', options: { hotspot: true } },
        defineField({
          name: 'shapeImages',
          title: 'Shape Images',
          type: 'object',
          fields: [
            { name: 'shape1', title: 'Shape 1', type: 'image' },
            { name: 'shape2', title: 'Shape 2', type: 'image' },
            { name: 'shape3', title: 'Shape 3', type: 'image' },
            { name: 'shape4', title: 'Shape 4', type: 'image' },
            { name: 'shape5', title: 'Shape 5', type: 'image' },
          ],
        }),
      ],
    }),
    // Blog Sidebar Settings
    defineField({
      name: 'sidebar',
      title: '📋 Sidebar Settings',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({
          name: 'servicesList',
          title: 'Services List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Service Title', type: 'string' },
                { name: 'link', title: 'Link', type: 'string' },
              ],
            },
          ],
        }),
        defineField({
          name: 'socialLinks',
          title: 'Social Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'icon', title: 'Icon Class', type: 'string' },
                { name: 'url', title: 'URL', type: 'url' },
              ],
            },
          ],
        }),
        defineField({
          name: 'instagramImages',
          title: 'Instagram Images',
          type: 'array',
          of: [{ type: 'image', options: { hotspot: true } }],
        }),
        defineField({
          name: 'instagramFollowText',
          title: 'Instagram Follow Button Text',
          type: 'string',
          initialValue: 'Follow Us Instagram',
        }),
        defineField({
          name: 'instagramFollowLink',
          title: 'Instagram Follow Link',
          type: 'url',
          initialValue: 'https://www.instagram.com/',
        }),
        defineField({
          name: 'tags',
          title: 'Sidebar Tags',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),
    // Comment Form Settings
    defineField({
      name: 'commentForm',
      title: '💬 Comment Form Settings',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        { name: 'title', title: 'Form Title', type: 'string', initialValue: 'Leave A Comment :' },
        { name: 'namePlaceholder', title: 'Name Placeholder', type: 'string', initialValue: 'Your Name' },
        { name: 'emailPlaceholder', title: 'Email Placeholder', type: 'string', initialValue: 'Your Email' },
        { name: 'phonePlaceholder', title: 'Phone Placeholder', type: 'string', initialValue: 'Phone Number' },
        { name: 'doctorPlaceholder', title: 'Doctor Select Placeholder', type: 'string', initialValue: 'Select Doctor' },
        { name: 'messagePlaceholder', title: 'Message Placeholder', type: 'string', initialValue: 'Write A Message...' },
        { name: 'buttonText', title: 'Submit Button Text', type: 'string', initialValue: 'Book An Appointment' },
        { name: 'recaptchaSiteKey', title: 'reCAPTCHA Site Key', type: 'string' },
      ],
    }),
  ],
});