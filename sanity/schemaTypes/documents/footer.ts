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
        { 
          name: 'logo', 
          title: 'Logo', 
          type: 'image', 
          options: { hotspot: true } 
        },
        { 
          name: 'description', 
          title: 'Description', 
          type: 'text', 
          initialValue: 'We are committed to delivering exceptional healthcare with compassion, expertise, and innovation. Our dedicated.' 
        },
        { 
          name: 'socialLinks', 
          title: 'Social Links', 
          type: 'array', 
          of: [
            { 
              type: 'object', 
              fields: [
                { 
                  name: 'platform', 
                  title: 'Platform', 
                  type: 'string', 
                  options: { 
                    list: [
                      { title: 'Facebook', value: 'Facebook' },
                      { title: 'Twitter', value: 'Twitter' },
                      { title: 'Instagram', value: 'Instagram' },
                      { title: 'YouTube', value: 'YouTube' },
                      { title: 'LinkedIn', value: 'LinkedIn' },
                      { title: 'TikTok', value: 'TikTok' },
                      { title: 'Pinterest', value: 'Pinterest' },
                    ] 
                  }
                },
                { 
                  name: 'url', 
                  title: 'Profile URL', 
                  type: 'url',
                  description: 'Full URL to your profile (e.g., https://facebook.com/yourpage)'
                },
                { 
                  name: 'icon', 
                  title: 'Icon Class', 
                  type: 'string', 
                  description: 'e.g., fa-brands fa-facebook-f (auto-filled if left empty)',
                },
              ],
            },
          ],
        },
      ],
    }),
    // Link Column 1
    defineField({
      name: 'linkColumn1',
      title: '🔗 Link Column 1',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { 
          name: 'title', 
          title: 'Column Title', 
          type: 'string', 
          initialValue: 'Quick Links' 
        },
        { 
          name: 'links', 
          title: 'Links', 
          type: 'array', 
          of: [
            { 
              type: 'object', 
              fields: [
                { 
                  name: 'label', 
                  title: 'Link Label', 
                  type: 'string' 
                },
                { 
                  name: 'link', 
                  title: 'URL', 
                  type: 'string',
                  description: 'e.g., /about, /services, or full URL'
                },
              ],
            },
          ],
        },
      ],
    }),
    // Link Column 2
    defineField({
      name: 'linkColumn2',
      title: '🔗 Link Column 2 (Services)',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { 
          name: 'title', 
          title: 'Column Title', 
          type: 'string', 
          initialValue: 'Our Services' 
        },
        { 
          name: 'links', 
          title: 'Links', 
          type: 'array', 
          of: [
            { 
              type: 'object', 
              fields: [
                { 
                  name: 'label', 
                  title: 'Link Label', 
                  type: 'string' 
                },
                { 
                  name: 'link', 
                  title: 'URL', 
                  type: 'string',
                  description: 'e.g., /services/patient-resources'
                },
              ],
            },
          ],
        },
      ],
    }),
    // Contact Column - Multiple entries with proper field names!
    defineField({
      name: 'contactColumn',
      title: '📞 Contact Information',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { 
          name: 'title', 
          title: 'Column Title', 
          type: 'string', 
          initialValue: 'Contact Us' 
        },
        { 
          name: 'addresses', 
          title: '📍 Addresses (Multiple)', 
          type: 'array',
          of: [
            { 
              type: 'object', 
              fields: [
                { 
                  name: 'label', 
                  title: 'Label', 
                  type: 'string', 
                  initialValue: 'Address' 
                },
                { 
                  name: 'text', 
                  title: 'Address Text', 
                  type: 'text', 
                  rows: 3,
                  description: 'Full address (will be linked to Google Maps automatically)'
                },
                { 
                  name: 'mapLink', 
                  title: 'Custom Google Maps Link', 
                  type: 'url',
                  description: 'Optional: Custom Google Maps URL. Leave empty to auto-generate.',
                  placeholder: 'https://maps.google.com/?q=Your+Address'
                },
              ],
            },
          ],
          description: 'Add one or more addresses'
        },
        { 
          name: 'phones', 
          title: '📱 Phone Numbers (Multiple)', 
          type: 'array',
          of: [
            { 
              type: 'object', 
              fields: [
                { 
                  name: 'label', 
                  title: 'Label', 
                  type: 'string', 
                  initialValue: 'Phone Number' 
                },
                { 
                  name: 'number', 
                  title: 'Phone Number', 
                  type: 'string',
                  description: 'Enter number with country code (e.g., +917047145306)',
                  placeholder: '+917047145306'
                },
              ],
            },
          ],
          description: 'Add one or more phone numbers'
        },
        { 
          name: 'emails', 
          title: '✉️ Email Addresses (Multiple)', 
          type: 'array',
          of: [
            { 
              type: 'object', 
              fields: [
                { 
                  name: 'label', 
                  title: 'Label', 
                  type: 'string', 
                  initialValue: 'Email Address' 
                },
                { 
                  name: 'address', 
                  title: 'Email Address', 
                  type: 'string',
                  description: 'Enter email address (will be linked automatically)',
                  placeholder: 'info@example.com'
                },
              ],
            },
          ],
          description: 'Add one or more email addresses'
        },
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
        { 
          name: 'title', 
          title: 'Title', 
          type: 'string', 
          initialValue: 'Instagram' 
        },
        { 
          name: 'images', 
          title: 'Instagram Images', 
          type: 'array', 
          of: [
            { 
              type: 'object', 
              fields: [
                { 
                  name: 'src', 
                  title: 'Image URL', 
                  type: 'string' 
                },
                { 
                  name: 'link', 
                  title: 'Link URL', 
                  type: 'url' 
                },
              ],
            },
          ],
        },
      ],
    }),
    // Copyright
    defineField({
      name: 'copyright',
      title: '© Copyright',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { 
          name: 'text', 
          title: 'Copyright Text', 
          type: 'string', 
          initialValue: 'Copyright © 2026 Creativoxa. All Rights Reserved.' 
        },
        { 
          name: 'links', 
          title: 'Legal Links', 
          type: 'array', 
          of: [
            { 
              type: 'object', 
              fields: [
                { 
                  name: 'label', 
                  title: 'Link Label', 
                  type: 'string' 
                },
                { 
                  name: 'link', 
                  title: 'URL', 
                  type: 'string',
                  placeholder: '/terms or full URL'
                },
              ],
            },
          ],
        },
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