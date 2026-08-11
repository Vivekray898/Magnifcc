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
    // About Column
    defineField({
      name: 'aboutColumn',
      title: '🏢 About Column',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
        { name: 'description', title: 'Description', type: 'text', initialValue: 'We are committed to delivering exceptional healthcare with compassion, expertise, and innovation. Our dedicated.' },
        { name: 'buttonImage', title: 'Button Image (e.g., app store badge)', type: 'image', options: { hotspot: true } },
        { name: 'socialLinks', title: 'Social Links', type: 'array', of: [
          { type: 'object', fields: [
            { name: 'platform', title: 'Platform', type: 'string', options: { 
              list: ['Facebook', 'Twitter', 'Instagram', 'YouTube', 'LinkedIn', 'TikTok', 'Pinterest'] 
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
          { name: 'number', title: 'Phone Number', type: 'string', initialValue: '+91-7047145306' },
          { name: 'link', title: 'Phone Link', type: 'string', initialValue: 'tel:+917047145306' },
        ]},
        { name: 'email', title: 'Email', type: 'object', fields: [
          { name: 'label', title: 'Label', type: 'string', initialValue: 'Email Address' },
          { name: 'address', title: 'Email Address', type: 'string', initialValue: 'info@example.com' },
          { name: 'link', title: 'Email Link', type: 'string', initialValue: 'mailto:info@example.com' },
        ]},
      ],
    }),
    // WhatsApp Settings
    defineField({
      name: 'whatsapp',
      title: '💬 WhatsApp Settings',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { 
          name: 'enabled', 
          title: 'Enable WhatsApp Button', 
          type: 'boolean', 
          initialValue: true,
          description: 'Show/hide the floating WhatsApp button'
        },
        { 
          name: 'phoneNumber', 
          title: 'Phone Number', 
          type: 'string', 
          initialValue: '+917047145306',
          description: 'Enter phone number with country code (e.g., +917047145306)'
        },
        { 
          name: 'message', 
          title: 'Default Message', 
          type: 'text', 
          initialValue: 'Hello! I have a question about your services.',
          description: 'Pre-filled message when user clicks the WhatsApp button'
        },
        { 
          name: 'position', 
          title: 'Button Position', 
          type: 'string', 
          initialValue: 'bottom-right',
          options: {
            list: [
              { title: 'Bottom Right', value: 'bottom-right' },
              { title: 'Bottom Left', value: 'bottom-left' },
              { title: 'Top Right', value: 'top-right' },
              { title: 'Top Left', value: 'top-left' },
            ]
          }
        },
        { 
          name: 'size', 
          title: 'Button Size', 
          type: 'string', 
          initialValue: 'medium',
          options: {
            list: [
              { title: 'Small (48px)', value: 'small' },
              { title: 'Medium (62px)', value: 'medium' },
              { title: 'Large (76px)', value: 'large' },
            ]
          }
        },
        { 
          name: 'showTooltip', 
          title: 'Show Tooltip', 
          type: 'boolean', 
          initialValue: true,
          description: 'Show/hide the "Chat with us on WhatsApp" tooltip'
        },
        { 
          name: 'tooltipText', 
          title: 'Tooltip Text', 
          type: 'string', 
          initialValue: 'Chat with us on WhatsApp',
          description: 'Text displayed in the tooltip'
        },
        { 
          name: 'bottomOffset', 
          title: 'Bottom Offset (px)', 
          type: 'number', 
          initialValue: 90,
          description: 'Distance from bottom of screen. Set higher if you have a scroll-to-top button (default: 90px)'
        },
      ],
    }),
    // Instagram Section
    defineField({
      name: 'instagram',
      title: '📸 Instagram Section',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'title', title: 'Title', type: 'string', initialValue: 'Instagram' },
        { name: 'images', title: 'Instagram Images', type: 'array', of: [
          { type: 'object', fields: [
            { name: 'src', title: 'Image URL', type: 'string' },
            { name: 'link', title: 'Link URL', type: 'url' },
          ]},
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
        { name: 'text', title: 'Copyright Text', type: 'string', initialValue: 'Copyright © 2026 Creativoxa. All Rights Reserved.' },
        { name: 'links', title: 'Footer Links', type: 'array', of: [
          { type: 'object', fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'link', title: 'Link', type: 'string' },
          ]},
        ]},
      ],
    }),
    // Footer Appearance
    defineField({
      name: 'appearance',
      title: '🎨 Footer Appearance',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { 
          name: 'backgroundColor', 
          title: 'Background Color', 
          type: 'string', 
          initialValue: '#1a1a1a',
          description: 'Use hex color code (e.g., #1a1a1a)'
        },
        { 
          name: 'textColor', 
          title: 'Text Color', 
          type: 'string', 
          initialValue: '#e8e6e1',
          description: 'Use hex color code (e.g., #e8e6e1)'
        },
        { 
          name: 'accentColor', 
          title: 'Accent/Hover Color', 
          type: 'string', 
          initialValue: '#a60c13',
          description: 'Use hex color code (e.g., #a60c13)'
        },
        { 
          name: 'backgroundImage', 
          title: 'Background Image', 
          type: 'image', 
          options: { hotspot: true },
          description: 'Optional background image for the footer'
        },
      ],
    }),
  ],
});