// sanity/schemaTypes/shared/sections/heroBanner.ts
import { defineField } from 'sanity';
import { titleField } from '../fields/title';
import { subtitleField } from '../fields/subtitle';
import { descriptionField } from '../fields/description';
import { ctaField } from '../fields/cta';
import { statsField } from '../fields/stats';

export const heroBannerSection = defineField({
  name: 'heroBanner',
  title: '🟣 Hero Banner',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    subtitleField({ title: 'Subtitle', initialValue: 'Solutions for Better Health' }),
    titleField({ title: 'Main Heading', initialValue: 'Your Health Our Priority' }),
    defineField({
      name: 'highlightedText',
      title: 'Highlighted Text (colored word)',
      type: 'string',
      initialValue: 'Health',
    }),
    descriptionField({ title: 'Description', initialValue: 'We are dedicated to putting your health at the forefront of everything we do. Our compassionate team of healthcare.' }),
    
    // --- REPLACED IMAGE WITH YOUTUBE VIDEO ---
    defineField({
      name: 'heroVideoUrl',
      title: 'YouTube Video URL',
      type: 'string',
      description: 'Paste the full YouTube video link here (e.g., https://www.youtube.com/watch?v=VIDEO_ID)',
    }),
    // -----------------------------------------

    ctaField({ text: 'Read More', link: '/about' }),
    statsField({ title: 'Statistics Cards' }),
    defineField({
      name: 'teamImages',
      title: 'Team Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'teamStats',
      title: '👥 Team Statistics',
      type: 'object',
      fields: [
        defineField({
          name: 'number',
          title: 'Number (e.g., 2000)',
          type: 'string',
          initialValue: '2000',
        }),
        defineField({
          name: 'suffix',
          title: 'Suffix (e.g., +)',
          type: 'string',
          initialValue: '+',
        }),
        defineField({
          name: 'label',
          title: 'Label (e.g., Experience Team)',
          type: 'string',
          initialValue: 'Experience Team',
        }),
      ],
    }),
  ],
});