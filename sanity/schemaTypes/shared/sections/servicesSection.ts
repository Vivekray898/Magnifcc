// sanity/schemaTypes/shared/sections/servicesSection.ts

import { defineField } from 'sanity';
import { titleField } from '../fields/title';
import { subtitleField } from '../fields/subtitle';

export const servicesSection = defineField({
  name: 'servicesSection',
  title: '🟢 Services Section',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    subtitleField({ title: 'Subtitle', initialValue: '# Our Services' }),
    titleField({ title: 'Section Title', initialValue: 'Our  Services.' }),
    // REMOVED: services array - now fetched from servicesDetails
  ],
});