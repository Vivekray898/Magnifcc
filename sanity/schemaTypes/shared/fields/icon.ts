// sanity/schemaTypes/shared/fields/icon.ts

import { defineField } from 'sanity';
import IconPicker from '../../../components/IconPicker';

export const iconField = defineField({
  name: 'icon',
  title: 'Icon',
  type: 'string',
  description: 'Select an icon from the healthcare collection',
  components: {
    input: IconPicker,
  },
});