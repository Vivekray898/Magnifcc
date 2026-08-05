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
    defineField({
      name: 'heroSection',
      title: '🟣 Hero Section',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        { name: 'title', title: 'Hero Title', type: 'string', initialValue: 'contact us' },
        { name: 'subtitle', title: 'Breadcrumb Text', type: 'string', initialValue: 'contact us' },
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
    defineField({
      name: 'contactSection',
      title: '📞 Contact Section',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        { name: 'subtitle', title: 'Subtitle', type: 'string', initialValue: '# Get In Touch' },
        { name: 'title', title: 'Section Title', type: 'string', initialValue: 'Stay Connected for Better Health.' },
        defineField({
          name: 'formData',
          title: 'Form Fields',
          type: 'object',
          fields: [
            { name: 'namePlaceholder', title: 'Name Placeholder', type: 'string', initialValue: 'Your Name' },
            { name: 'emailPlaceholder', title: 'Email Placeholder', type: 'string', initialValue: 'Your Email' },
            { name: 'phonePlaceholder', title: 'Phone Placeholder', type: 'string', initialValue: 'Phone Number' },
            { name: 'doctorPlaceholder', title: 'Doctor Placeholder', type: 'string', initialValue: 'Select Doctor' },
            { name: 'messagePlaceholder', title: 'Message Placeholder', type: 'string', initialValue: 'Write A Message...' },
            { name: 'buttonText', title: 'Button Text', type: 'string', initialValue: 'Book An Appointment' },
            { name: 'recaptchaSiteKey', title: 'reCAPTCHA Site Key', type: 'string', initialValue: '<!-- Put Your ReCapctha Site Key -->' },
          ],
        }),
        defineField({
          name: 'contactInfo',
          title: 'Contact Information',
          type: 'object',
          fields: [
            { name: 'emailLabel', title: 'Email Label', type: 'string', initialValue: 'Email Address' },
            { name: 'email', title: 'Email Address', type: 'string', initialValue: 'info123@gmail.com' },
            { name: 'phoneLabel', title: 'Phone Label', type: 'string', initialValue: 'Contact Us' },
            { name: 'phone', title: 'Phone Number', type: 'string', initialValue: '013 354 213 - 92132' },
            { name: 'addressLabel', title: 'Address Label', type: 'string', initialValue: 'Address' },
            { name: 'address', title: 'Address', type: 'string', initialValue: '1901 Thornridge Cir. Shiloh' },
            { name: 'subjectLabel', title: 'Subject Label', type: 'string', initialValue: 'Subject' },
            { name: 'subject', title: 'Subject', type: 'string', initialValue: 'Medical and Dentist' },
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
                { name: 'platform', title: 'Platform', type: 'string', options: { 
                  list: ['Facebook', 'Twitter', 'Instagram', 'YouTube', 'LinkedIn'] 
                }},
                { name: 'url', title: 'URL', type: 'url' },
                { name: 'icon', title: 'Icon Class', type: 'string', description: 'e.g., fa-brands fa-facebook-f' },
              ],
            },
          ],
        }),
        { name: 'mapEmbedUrl', title: 'Google Maps Embed URL', type: 'url', initialValue: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C+Rajasthan!5e0!3m2!1sen!2sin!4v1500819483219' },
      ],
    }),
  ],
});