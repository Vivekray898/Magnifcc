// sanity/schemaTypes/documents/servicesDetails.ts
import { defineType, defineField } from 'sanity';

// Reusable Portable Text type (you can also put this in a shared file)
const richText = defineField({
  name: 'content',
  title: 'Content',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading 2', value: 'h2' },
        { title: 'Heading 3', value: 'h3' },
        { title: 'Heading 4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              { name: 'href', type: 'url', title: 'URL' },
              { name: 'blank', type: 'boolean', title: 'Open in new tab', initialValue: true },
            ],
          },
        ],
      },
    },
    { type: 'image', options: { hotspot: true } },
  ],
});

export default defineType({
  name: 'servicesDetails',
  title: 'Services Details',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      initialValue: 'Medical Services',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon SVG',
      type: 'text',
      description: 'Paste your SVG icon code here',
    }),

    // Short description — keep as plain text (used in meta + card)
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),

    // ✅ RICH TEXT — Word paste will preserve bold/italic/lists/headings
    { ...richText, name: 'longDescription', title: 'Long Description' },

    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Fluoride Treatments',
    }),

    // ✅ RICH TEXT
    { ...richText, name: 'sectionContent', title: 'Section Content' },

    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
    }),

    // ✅ RICH TEXT
    { ...richText, name: 'bottomText', title: 'Bottom Text' },

    // FAQs — answer becomes rich text so editors can format each answer
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'FAQ',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { ...richText, name: 'answer', title: 'Answer' },
          ],
        },
      ],
    }),

    defineField({
      name: 'servicesList',
      title: 'Services List (Sidebar)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
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
      name: 'prevService',
      title: 'Previous Service',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'link', title: 'Link', type: 'string' },
      ],
    }),
    defineField({
      name: 'nextService',
      title: 'Next Service',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'link', title: 'Link', type: 'string' },
      ],
    }),
  ],
});