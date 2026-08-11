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
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      initialValue: 'Your Health Our Priority',
    }),
    defineField({
      name: 'highlightedText',
      title: 'Highlighted Text (colored word)',
      type: 'string',
      initialValue: 'Health',
    }),
    descriptionField({
      title: 'Description',
      initialValue: 'We are dedicated to putting your health at the forefront of everything we do. Our compassionate team of healthcare.',
    }),

    // --- FEATURE POINT CHIPS ---
    defineField({
      name: 'features',
      title: '✨ Feature Points (chips)',
      type: 'array',
      description: 'Small white cards with icon + text shown between the description and the CTA button.',
      of: [
        {
          type: 'object',
          name: 'featurePoint',
          title: 'Feature Point',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: '✅ Check Circle', value: 'fa-solid fa-circle-check' },
                  { title: '👨‍⚕️ Consultant', value: 'fa-solid fa-user-doctor' },
                  { title: '👥 Team', value: 'fa-solid fa-users' },
                  { title: '🕐 Clock / Timely', value: 'fa-solid fa-clock' },
                  { title: '🛡️ Shield / Quality', value: 'fa-solid fa-shield-halved' },
                  { title: '🏅 Certificate', value: 'fa-solid fa-certificate' },
                  { title: '⭐ Star', value: 'fa-solid fa-star' },
                  { title: '❤️ Heart Pulse', value: 'fa-solid fa-heart-pulse' },
                  { title: '🩺 Stethoscope', value: 'fa-solid fa-stethoscope' },
                  { title: '🤲 Hand Medical', value: 'fa-solid fa-hand-holding-medical' },
                ],
              },
              initialValue: 'fa-solid fa-circle-check',
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              initialValue: 'End-to-End Solution',
            }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'icon' },
          },
        },
      ],
      initialValue: [
        { icon: 'fa-solid fa-circle-check', label: 'End-to-End Solution' },
        { icon: 'fa-solid fa-user-doctor', label: 'Expert Consultants' },
        { icon: 'fa-solid fa-clock', label: 'Timely Delivery' },
        { icon: 'fa-solid fa-shield-halved', label: 'Quality Assurance' },
      ],
    }),

    // --- YouTube video ---
    defineField({
      name: 'heroVideoUrl',
      title: 'YouTube Video URL',
      type: 'string',
      description: 'Paste the full YouTube video link here (e.g., https://www.youtube.com/watch?v=VIDEO_ID)',
    }),

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
        defineField({ name: 'number', title: 'Number (e.g., 2000)', type: 'string', initialValue: '2000' }),
        defineField({ name: 'suffix', title: 'Suffix (e.g., +)', type: 'string', initialValue: '+' }),
        defineField({ name: 'label', title: 'Label (e.g., Experience Team)', type: 'string', initialValue: 'Experience Team' }),
      ],
    }),
  ],
});