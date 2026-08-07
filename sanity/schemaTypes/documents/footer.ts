// sanity/schemaTypes/documents/footer.ts

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'footer',
  title: 'Footer Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Footer Title',
      type: 'string',
      initialValue: 'Footer Settings',
    }),
    // Newsletter Section
    defineField({
      name: 'newsletter',
      title: '📧 Newsletter Section',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'title', title: 'Title', type: 'string', initialValue: 'Subscribe To Regular Newsletters.' },
        { name: 'placeholder', title: 'Input Placeholder', type: 'string', initialValue: 'Enter Your Email' },
        { name: 'buttonText', title: 'Button Text', type: 'string', initialValue: 'Subscribe' },
        { name: 'formAction', title: 'Form Action URL', type: 'string', initialValue: 'assets/script/mailchamp.php' },
        { name: 'enabled', title: 'Show Newsletter?', type: 'boolean', initialValue: true },
      ],
    }),
    // About Column
    defineField({
      name: 'aboutColumn',
      title: '🏢 About Column',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
        { name: 'description', title: 'Description', type: 'text', initialValue: 'We are committed to delivering exceptional healthcare with compassion, expertise, and innovation. Our dedicated.' },
        { name: 'socialLinks', title: 'Social Links', type: 'array', of: [
          { type: 'object', fields: [
            { name: 'platform', title: 'Platform', type: 'string', options: { 
              list: ['Facebook', 'Twitter', 'Instagram', 'YouTube', 'LinkedIn'] 
            }},
            { name: 'url', title: 'URL', type: 'url' },
            { name: 'icon', title: 'Icon Class', type: 'string', description: 'e.g., fa-brands fa-facebook-f' },
          ]},
        ]},
      ],
    }),
    // Link Column 1
    defineField({
      name: 'linkColumn1',
      title: '🔗 Link Column 1',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'title', title: 'Column Title', type: 'string', initialValue: 'Link' },
        { name: 'links', title: 'Links', type: 'array', of: [
          { type: 'object', fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'link', title: 'Link', type: 'string' },
          ]},
        ]},
      ],
    }),
    // Link Column 2
    defineField({
      name: 'linkColumn2',
      title: '🔗 Link Column 2 (Services)',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'title', title: 'Column Title', type: 'string', initialValue: 'Services' },
        { name: 'links', title: 'Links', type: 'array', of: [
          { type: 'object', fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'link', title: 'Link', type: 'string' },
          ]},
        ]},
      ],
    }),
    // Contact Column
    defineField({
      name: 'contactColumn',
      title: '📞 Contact Column',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'title', title: 'Column Title', type: 'string', initialValue: 'Contact Us' },
        { name: 'address', title: 'Address', type: 'object', fields: [
          { name: 'label', title: 'Label', type: 'string', initialValue: 'Address' },
          { name: 'text', title: 'Address Text', type: 'string', initialValue: '1901 Thornridge Cir. Shiloh' },
        ]},
        { name: 'phone', title: 'Phone', type: 'object', fields: [
          { name: 'label', title: 'Label', type: 'string', initialValue: 'Phone Number' },
          { name: 'number', title: 'Phone Number', type: 'string', initialValue: '013 354 213 - 92132' },
          { name: 'link', title: 'Phone Link', type: 'string', initialValue: 'callto:013221392132' },
        ]},
        { name: 'email', title: 'Email', type: 'object', fields: [
          { name: 'label', title: 'Label', type: 'string', initialValue: 'Email Address' },
          { name: 'address', title: 'Email Address', type: 'string', initialValue: 'info123@gmail.com' },
          { name: 'link', title: 'Email Link', type: 'string', initialValue: 'mailto:info123@gmail.com' },
        ]},
      ],
    }),
    // Copyright
    defineField({
      name: 'copyright',
      title: '© Copyright',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'text', title: 'Copyright Text', type: 'string', initialValue: 'Copyright © 2024 Creativoxa. All Rights Reserved.' },
        { name: 'links', title: 'Footer Links', type: 'array', of: [
          { type: 'object', fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'link', title: 'Link', type: 'string' },
          ]},
        ]},
      ],
    }),
  ],
});