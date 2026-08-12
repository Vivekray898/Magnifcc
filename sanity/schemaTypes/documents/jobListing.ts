// sanity/schemaTypes/documents/jobListing.ts

import { defineField, defineType } from 'sanity';
import { CustomDropdownInput } from '../../components/CustomDropdownInput';

export const jobListing = defineType({
  name: 'jobListing',
  title: '💼 Job Listing',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'jobTitle', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      components: {
        input: CustomDropdownInput,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      components: {
        input: CustomDropdownInput,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'jobType',
      title: 'Job Type',
      type: 'string',
      components: {
        input: CustomDropdownInput,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'salary',
      title: 'Salary Range (optional)',
      type: 'string',
      description: 'e.g., 4-6 LPA. Leave empty to show "Not Disclosed".',
    }),
    defineField({
      name: 'experience',
      title: 'Experience Required',
      type: 'string',
      description: 'e.g., 2-4 years, Entry Level, 5+ years',
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Heading 4', value: 'h4' },
            { title: 'Blockquote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' },
              { title: 'Strike', value: 'strike-through' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule) =>
                      Rule.uri({
                        allowRelative: true,
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }),
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Open in new tab',
                    initialValue: false,
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
      description: 'Full job description with rich text formatting',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'requirements',
      title: 'Key Requirements',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Add bullet points for skills and qualifications.',
    }),
    defineField({
      name: 'applyLink',
      title: 'Application Link or Email',
      type: 'string',
      description: 'Paste a URL to an application form, or an email (mailto:jobs@magnific.com)',
    }),
  ],
  preview: {
    select: { 
      title: 'jobTitle', 
      subtitle: 'department',
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return { 
        title, 
        subtitle: subtitle ? `${subtitle} • Open Position` : 'Open Position' 
      };
    },
  },
});