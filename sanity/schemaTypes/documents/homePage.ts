// /sanity/schemaTypes/documents/homePage.ts
import { defineType, defineField } from 'sanity';
import { titleField } from '../shared/fields/title';
import { heroBannerSection } from '../shared/sections/heroBanner';
import { servicesSection } from '../shared/sections/servicesSection';
import { aboutSection } from '../shared/sections/aboutSection';
import { marqueeSection } from '../shared/sections/marqueeSection';
// import { portfolioSection } from '../shared/sections/portfolioSection';
import { ourApproachSection } from '../shared/sections/ourApproachSection'; // Changed to named import
import { whyChooseUsSection } from '../shared/sections/whyChooseUsSection';
import { faqSection } from '../shared/sections/faqSection';
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
    
    // All sections - using as any to bypass type checking
    heroBannerSection as any,
    servicesSection as any,
    aboutSection as any,
    marqueeSection as any,
   // portfolioSection as any,
    ourApproachSection as any,
    whyChooseUsSection as any,
    faqSection as any,
    blogSection as any,
  ],
});