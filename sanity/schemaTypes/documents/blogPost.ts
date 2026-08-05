// sanity/schemaTypes/documents/blogPost.ts

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Post Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'datetime',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Admin',
    }),
    defineField({
      name: 'comments',
      title: 'Comments Count',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      initialValue: false,
    }),
    // Quote Section
    defineField({
      name: 'quote',
      title: 'Quote Section',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'text', title: 'Quote Text', type: 'text' },
        { name: 'author', title: 'Quote Author', type: 'string' },
      ],
    }),
    // Share Experience Section
    defineField({
      name: 'shareExperience',
      title: 'Share Experience Section',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'title', title: 'Section Title', type: 'string' },
        { name: 'content', title: 'Section Content', type: 'text' },
      ],
    }),
    // Gallery Images
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    // Bottom Section
    defineField({
      name: 'bottomSection',
      title: 'Bottom Section',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'title', title: 'Section Title', type: 'string' },
        { name: 'content', title: 'Section Content', type: 'text' },
      ],
    }),
    // Author Bio
    defineField({
      name: 'authorBio',
      title: 'Author Bio',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'avatar', title: 'Avatar', type: 'image', options: { hotspot: true } },
        { name: 'bio', title: 'Bio', type: 'text' },
        { name: 'socialIcon', title: 'Social Icon Class', type: 'string', description: 'e.g., fa-brands fa-x-twitter' },
        { name: 'socialLink', title: 'Social Link', type: 'url' },
      ],
    }),
    // Prev/Next Navigation
    defineField({
      name: 'prevPost',
      title: 'Previous Post Navigation',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'title', title: 'Button Text', type: 'string' },
        { name: 'link', title: 'Link', type: 'string' },
      ],
    }),
    defineField({
      name: 'nextPost',
      title: 'Next Post Navigation',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'title', title: 'Button Text', type: 'string' },
        { name: 'link', title: 'Link', type: 'string' },
      ],
    }),
  ],
});