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
        { label: 'Home', link: '/', hasDropdown: true, dropdownItems: [
          { label: 'Home 1', link: '/' },
          { label: 'Home 2', link: '/' },
          { label: 'Home 3', link: '/' },
        ]},
        { label: 'About', link: '/about', hasDropdown: false },
        { label: 'Research', link: 'javascript:void(0);', hasDropdown: true, dropdownItems: [
          { label: 'Portfolio', link: '/portfolio' },
          { label: 'Portfolio Details', link: '/portfolio' },
        ]},
        { label: 'Page', link: 'javascript:void(0);', hasDropdown: true, dropdownItems: [
          { label: 'Services', link: '/services' },
          { label: 'Services Details', link: '/services' },
          { label: 'Testimonials', link: '/testimonials' },
          { label: 'Pricing Table', link: '/pricing' },
          { label: 'FAQ', link: '/faq' },
          { label: 'Appointment', link: '/appointment' },
        ]},
        { label: 'Blog', link: 'javascript:void(0);', hasDropdown: true, dropdownItems: [
          { label: 'Our Blog', link: '/blog' },
          { label: 'Blog Details', link: '/blog' },
        ]},
        { label: 'Contact', link: '/contact', hasDropdown: false },
      ],
    }),
    defineField({
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'object',
      fields: [
        { name: 'text', title: 'Button Text', type: 'string', initialValue: 'Book Appointment' },
        { name: 'link', title: 'Button Link', type: 'string', initialValue: '/appointment' },
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