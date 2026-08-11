// sanity/schemaTypes/documents/contactPage.ts

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Contact Us',
    }),
    // Hero Section
    defineField({
      name: 'heroSection',
      title: '🎯 Hero Section',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({
          name: 'title',
          title: 'Hero Title',
          type: 'string',
          initialValue: 'contact us',
        }),
        defineField({
          name: 'subtitle',
          title: 'Breadcrumb Text',
          type: 'string',
          initialValue: 'contact us',
        }),
        defineField({
          name: 'image',
          title: 'Hero Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Optional background image for the hero section',
        }),
      ],
    }),
    // Enquiry Section
    defineField({
      name: 'enquirySection',
      title: '📝 Enquiry Section',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        // Badge & Title
        defineField({
          name: 'badge',
          title: 'Badge Text',
          type: 'string',
          initialValue: 'Get In Touch',
        }),
        defineField({
          name: 'title',
          title: 'Main Title',
          type: 'string',
          initialValue: 'Enquire',
        }),
        defineField({
          name: 'titleHighlight',
          title: 'Highlighted Word',
          type: 'string',
          initialValue: 'Now',
          description: 'This word will appear in a different color',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          initialValue: 'Whenever and wherever you need — it\'s our job to get you started on the correct path for your imminent or existing Health Care Facility. Reach out and let\'s begin your healthcare journey together.',
        }),
        
        // Contact Information
        defineField({
          name: 'phoneLabel',
          title: 'Phone Label',
          type: 'string',
          initialValue: 'Phone',
        }),
        defineField({
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
          initialValue: '(+91)-9073409444',
        }),
        defineField({
          name: 'emailLabel',
          title: 'Email Label',
          type: 'string',
          initialValue: 'Email',
        }),
        defineField({
          name: 'email',
          title: 'Email Address',
          type: 'string',
          initialValue: 'info@theteamtheconsultants.com',
        }),
        defineField({
          name: 'addressLabel',
          title: 'Address Label',
          type: 'string',
          initialValue: 'Address',
        }),
        defineField({
          name: 'address',
          title: 'Address',
          type: 'text',
          initialValue: '25, A.B. Sarani, Sevoke Road, Near ITI Road, Bhaktinagar, Siliguri – 734001',
        }),
        
        // Social Links
        defineField({
          name: 'socialLinks',
          title: 'Social Links',
          type: 'array',
          of: [
            defineField({
              name: 'socialLink',
              title: 'Social Link',
              type: 'object',
              fields: [
                defineField({
                  name: 'platform',
                  title: 'Platform',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Facebook', value: 'Facebook' },
                      { title: 'Instagram', value: 'Instagram' },
                      { title: 'LinkedIn', value: 'LinkedIn' },
                      { title: 'YouTube', value: 'YouTube' },
                      { title: 'Twitter', value: 'Twitter' },
                      { title: 'TikTok', value: 'TikTok' },
                      { title: 'Pinterest', value: 'Pinterest' },
                      { title: 'WhatsApp', value: 'WhatsApp' },
                    ],
                  },
                }),
                defineField({
                  name: 'url',
                  title: 'URL',
                  type: 'url',
                }),
                defineField({
                  name: 'icon',
                  title: 'Icon Class',
                  type: 'string',
                  description: 'Font Awesome icon class (e.g., fa-brands fa-facebook-f)',
                }),
                defineField({
                  name: 'color',
                  title: 'Color',
                  type: 'string',
                  description: 'Hex color code for the social icon (e.g., #1877F2)',
                }),
              ],
            }),
          ],
        }),
        
        // Form Fields
        defineField({
          name: 'form',
          title: 'Form Settings',
          type: 'object',
          options: { collapsible: true, collapsed: false },
          fields: [
            defineField({
              name: 'firstNamePlaceholder',
              title: 'First Name Placeholder',
              type: 'string',
              initialValue: 'John',
            }),
            defineField({
              name: 'lastNamePlaceholder',
              title: 'Last Name Placeholder',
              type: 'string',
              initialValue: 'Doe',
            }),
            defineField({
              name: 'emailPlaceholder',
              title: 'Email Placeholder',
              type: 'string',
              initialValue: 'john@example.com',
            }),
            defineField({
              name: 'phonePlaceholder',
              title: 'Phone Placeholder',
              type: 'string',
              initialValue: '+91 XXXXX XXXXX',
            }),
            defineField({
              name: 'companyPlaceholder',
              title: 'Company Placeholder',
              type: 'string',
              initialValue: 'Your hospital or organization name',
            }),
            defineField({
              name: 'messagePlaceholder',
              title: 'Message Placeholder',
              type: 'text',
              initialValue: 'Tell us about your healthcare facility requirements...',
            }),
            defineField({
              name: 'buttonText',
              title: 'Submit Button Text',
              type: 'string',
              initialValue: 'Submit Enquiry',
            }),
          ],
        }),
      ],
    }),
    // SEO Section
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
        }),
        defineField({
          name: 'keywords',
          title: 'Keywords',
          type: 'text',
          description: 'Comma-separated keywords',
        }),
      ],
    }),
  ],
});