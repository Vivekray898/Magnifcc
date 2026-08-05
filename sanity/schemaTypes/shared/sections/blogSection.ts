// sanity/schemaTypes/shared/sections/blogSection.ts
import { defineField } from 'sanity';
import { titleField } from '../fields/title';
import { subtitleField } from '../fields/subtitle';

export const blogSection = defineField({
  name: 'blogSection',
  title: '📝 Blog Section',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    subtitleField({ title: 'Subtitle', initialValue: '# blog' }),
    titleField({ title: 'Section Title', initialValue: 'Our Medical Blog.' }),
    defineField({
      name: 'posts',
      title: 'Blog Posts',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Post Title', type: 'string' },
            { name: 'excerpt', title: 'Excerpt', type: 'text' },
            { name: 'image', title: 'Featured Image', type: 'image', options: { hotspot: true } },
            { name: 'date', title: 'Date', type: 'string', initialValue: '15' },
            { name: 'month', title: 'Month', type: 'string', initialValue: 'April' },
            { name: 'author', title: 'Author', type: 'string', initialValue: 'Admin' },
            { name: 'comments', title: 'Comments Count', type: 'number', initialValue: 2 },
            { name: 'category', title: 'Category', type: 'string', initialValue: 'Health & Wellness' },
            { name: 'link', title: 'Link', type: 'string', initialValue: 'blog-details.html' },
            { name: 'featured', title: 'Featured Post', type: 'boolean', initialValue: false },
            { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
          ],
        },
      ],
    }),
    defineField({
      name: 'viewAllText',
      title: 'View All Button Text',
      type: 'string',
      initialValue: 'View All Blog',
    }),
    defineField({
      name: 'viewAllLink',
      title: 'View All Button Link',
      type: 'string',
      initialValue: 'our-blog.html',
    }),
  ],
});