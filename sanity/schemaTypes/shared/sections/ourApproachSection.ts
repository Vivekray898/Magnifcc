// sanity/schemaTypes/shared/sections/ourApproachSection.ts
import { defineField } from 'sanity';

export const ourApproachSection = defineField({
  name: 'ourApproach',
  title: '🎯 Our Process (Serpentine Flow)',
  type: 'object',
  options: { collapsible: true, collapsed: false },
  fields: [
    defineField({ name: 'subtitle', title: 'Eyebrow', type: 'string', initialValue: 'Our Process' }),
    defineField({ name: 'title', title: 'Main Title', type: 'string', initialValue: 'Process that moves things forward' }),
    defineField({
      name: 'steps',
      title: 'Process Steps (first 4 = top row, next 4 = bottom row)',
      type: 'array',
      validation: (Rule) => Rule.min(2).max(8),
      of: [
        {
          type: 'object',
          title: 'Step',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: '✏️ Assessment', value: 'fa-solid fa-file-pen' },
                  { title: '💡 Lightbulb', value: 'fa-solid fa-lightbulb' },
                  { title: '👁 Vision', value: 'fa-solid fa-eye' },
                  { title: '🔀 Best Practices', value: 'fa-solid fa-diagram-project' },
                  { title: '📐 Implementation Plan', value: 'fa-solid fa-compass-drafting' },
                  { title: '✨ Solutions', value: 'fa-solid fa-wand-magic-sparkles' },
                  { title: '🔍 Review', value: 'fa-solid fa-magnifying-glass-chart' },
                  { title: '🔄 Refine', value: 'fa-solid fa-arrows-rotate' },
                ],
              },
            }),
            defineField({
              name: 'title',
              title: 'Step Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: { select: { title: 'title' } },
        },
      ],
    }),
  ],
});