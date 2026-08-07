// sanity/schemaTypes/documents/contactInfo.ts

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      initialValue: "Sarada Apartment, Opp. College Para Sishu Uddyan, Ashutosh Mukherjee Road, College Para, Siliguri – 734001",
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      initialValue: "013 354 213 - 92132",
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      initialValue: "info@magnifichcs.com",
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp Number',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'facebook', title: 'Facebook', type: 'url' },
        { name: 'twitter', title: 'Twitter/X', type: 'url' },
        { name: 'instagram', title: 'Instagram', type: 'url' },
        { name: 'youtube', title: 'YouTube', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn', type: 'url' },
      ],
    }),
  ],
});