// sanity/schemaTypes/documents/header.ts

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'header',
  title: 'Header Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Header Title',
      type: 'string',
      initialValue: 'Header Settings',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'navItems',
      title: 'Navigation Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'link', title: 'Link', type: 'string' },
            { name: 'hasDropdown', title: 'Has Dropdown?', type: 'boolean', initialValue: false },
            { name: 'dropdownItems', title: 'Dropdown Items', type: 'array', of: [
              { type: 'object', fields: [
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'link', title: 'Link', type: 'string' },
              ]}
            ], hidden: ({ parent }) => !parent?.hasDropdown },
          ],
        },
      ],
      initialValue: [
        { label: 'Home', link: 'index.html', hasDropdown: true, dropdownItems: [
          { label: 'Home 1', link: 'index.html' },
          { label: 'Home 2', link: 'index-2.html' },
          { label: 'Home 3', link: 'index-3.html' },
        ]},
        { label: 'About', link: '/about', hasDropdown: false },
        { label: 'Research', link: 'javascript:void(0);', hasDropdown: true, dropdownItems: [
          { label: 'Portfolio', link: 'portfolio.html' },
          { label: 'Portfolio Details', link: 'portfolio-details.html' },
        ]},
        { label: 'Page', link: 'javascript:void(0);', hasDropdown: true, dropdownItems: [
          { label: 'Services', link: 'services.html' },
          { label: 'Services Details', link: 'services-details.html' },
          { label: 'Testimonials', link: 'testimonials.html' },
          { label: 'Pricing Table', link: 'pricing-table.html' },
          { label: 'FAQ', link: 'faq.html' },
          { label: 'Appointment', link: 'appointment.html' },
        ]},
        { label: 'Blog', link: 'javascript:void(0);', hasDropdown: true, dropdownItems: [
          { label: 'Our Blog', link: 'our-blog.html' },
          { label: 'Blog Details', link: 'blog-details.html' },
        ]},
        { label: 'Contact', link: 'contact.html', hasDropdown: false },
      ],
    }),
    defineField({
      name: 'ctaButton',
      title: 'CTA Button (Book Appointment)',
      type: 'object',
      fields: [
        { name: 'text', title: 'Button Text', type: 'string', initialValue: 'Book Appointment' },
        { name: 'link', title: 'Button Link', type: 'string', initialValue: 'appointment.html' },
        { name: 'show', title: 'Show Button?', type: 'boolean', initialValue: true },
      ],
    }),
    defineField({
      name: 'searchEnabled',
      title: 'Enable Search?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
});