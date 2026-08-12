// sanity/schemaTypes/documents/customValues.ts

import { defineField, defineType } from 'sanity';

export const customValues = defineType({
  name: 'customValues',
  title: '📝 Custom Values',
  type: 'document',
  fields: [
    defineField({
      name: 'fieldName',
      title: 'Field Name',
      type: 'string',
      options: {
        list: [
          { title: 'Department', value: 'department' },
          { title: 'Location', value: 'location' },
          { title: 'Job Type', value: 'jobType' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'values',
      title: 'Custom Values',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Custom values added by users',
    }),
  ],
  preview: {
    select: { title: 'fieldName' },
    prepare({ title }) {
      return { title: title || 'Custom Values' };
    },
  },
});