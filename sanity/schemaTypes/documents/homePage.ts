// sanity/schemaTypes/documents/homePage.ts

import { defineType, defineField } from 'sanity';
import { titleField } from '../shared/fields/title';
import { heroBannerSection } from '../shared/sections/heroBanner';
import { servicesSection } from '../shared/sections/servicesSection';
import { aboutSection } from '../shared/sections/aboutSection';
import { marqueeSection } from '../shared/sections/marqueeSection';
import { portfolioSection } from '../shared/sections/portfolioSection';
import { whyChooseUsSection } from '../shared/sections/whyChooseUsSection';
import { pricingSection } from '../shared/sections/pricingSection';
import { testimonialsSection } from '../shared/sections/testimonialsSection';
import { brandLogosSection } from '../shared/sections/brandLogosSection';
import { blogSection } from '../shared/sections/blogSection';

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // Page Settings
    titleField({ title: 'Page Title', initialValue: 'Home' }),
    defineField({
      name: 'pageDescription',
      title: 'Page Description',
      type: 'text',
      description: 'Meta description for SEO',
    }),
    
    // All sections - imported and reused!
    heroBannerSection,
    servicesSection,
    aboutSection,
    marqueeSection,
    portfolioSection,
    whyChooseUsSection,
    pricingSection,
    testimonialsSection,
    brandLogosSection,
    blogSection,
  ],
});