import { defineField, defineType } from 'sanity';

// Removed the @sanity/icons import entirely to prevent version mismatch crashes

export const faqSection = defineType({
  name: 'faqSection',
  title: 'FAQ Section',
  type: 'object',
  // The 'icon' property is removed. Sanity will use a default icon.
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'FAQ',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Frequently Asked Questions',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      initialValue: "Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.",
    }),
    defineField({
      name: 'numberOfRows',
      title: 'Number of Scrolling Rows',
      type: 'number',
      initialValue: 3,
      options: {
        list: [
          { title: '1 Row', value: 1 },
          { title: '2 Rows', value: 2 },
          { title: '3 Rows', value: 3 },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required().min(1).max(3),
    }),
    defineField({
      name: 'rows',
      title: 'Scrolling Rows',
      type: 'array',
      of: [
        defineField({
          name: 'row',
          title: 'Row Configuration',
          type: 'object',
          fields: [
            defineField({
              name: 'id',
              title: 'Row ID (Internal)',
              type: 'string',
              description: 'Used for keys (e.g., row1, row2)',
              initialValue: 'row1',
            }),
            defineField({
              name: 'speed',
              title: 'Scroll Speed',
              type: 'string',
              description: 'Lower number = faster scroll.',
              initialValue: '60s',
              options: {
                list: [
                  { title: 'Fast (40s)', value: '40s' },
                  { title: 'Medium (60s)', value: '60s' },
                  { title: 'Slow (80s)', value: '80s' },
                ],
              },
            }),
            defineField({
              name: 'direction',
              title: 'Scroll Direction',
              type: 'string',
              initialValue: 'left',
              options: {
                list: [
                  { title: 'Left ←', value: 'left' },
                  { title: 'Right →', value: 'right' },
                ],
                layout: 'radio',
              },
            }),
            defineField({
              name: 'items',
              title: 'FAQ Cards in this Row',
              type: 'array',
              of: [
                defineField({
                  name: 'faqItem',
                  title: 'FAQ Item',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'question',
                      title: 'Question',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'answer',
                      title: 'Answer',
                      type: 'text',
                      rows: 3,
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'question',
                      subtitle: 'answer',
                    },
                  },
                }),
              ],
              validation: (Rule) => Rule.min(3).error('Add at least 3 items so the seamless loop works smoothly'),
            }),
          ],
          preview: {
            select: {
              title: 'id',
              direction: 'direction',
              speed: 'speed',
              items: 'items',
            },
            prepare({ title, direction, speed, items = [] }) {
              return {
                title: `Row: ${title || 'Unnamed'}`,
                subtitle: `${items.length} cards | Moves ${direction} @ ${speed}`,
              };
            },
          },
        }),
      ],
      validation: (Rule) => Rule.min(1).max(3).error('You can have between 1 and 3 rows'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      rows: 'rows',
    },
    prepare({ title, rows = [] }) {
      return {
        title: title || 'FAQ Scroller Section',
        subtitle: `${rows.length} active scrolling ${rows.length === 1 ? 'row' : 'rows'}`,
      };
    },
  },
});