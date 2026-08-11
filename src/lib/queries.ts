// src/lib/queries.ts

import { client } from './sanity';

// Helper function to ensure links have leading slashes
function normalizeLinks(obj: any): any {
  if (!obj) return obj;
  
  // If it's an array, process each item
  if (Array.isArray(obj)) {
    return obj.map(item => normalizeLinks(item));
  }
  
  // If it's an object, process each property
  if (typeof obj === 'object' && obj !== null) {
    const result: any = {};
    for (const [key, value] of Object.entries(obj)) {
      // If the property is 'link' and it's a string, add leading slash
      if (key === 'link' && typeof value === 'string' && value && !value.startsWith('/') && !value.startsWith('javascript:') && !value.startsWith('#')) {
        result[key] = '/' + value;
      } else {
        result[key] = normalizeLinks(value);
      }
    }
    return result;
  }
  
  return obj;
}

export async function getHeader() {
  const rawData = await client.fetch(`*[_type == "header"][0]{
    title,
    logo {
      asset->{
        _id,
        url
      }
    },
    navItems[] {
      label,
      link,
      hasDropdown,
      dropdownItems[] {
        label,
        link
      }
    },
    ctaButton {
      text,
      link,
      show
    },
    searchEnabled
  }`);
  
  // Normalize all links to have leading slashes
  return normalizeLinks(rawData);
}

export async function getFooter() {
  const rawData = await client.fetch(`*[_type == "footer"][0]{
    title,
    newsletter {
      title,
      placeholder,
      buttonText,
      formAction,
      enabled
    },
    aboutColumn {
      logo {
        asset->{
          _id,
          url
        }
      },
      description,
      socialLinks[] {
        platform,
        url,
        icon
      }
    },
    linkColumn1 {
      title,
      links[] {
        label,
        link
      }
    },
    linkColumn2 {
      title,
      links[] {
        label,
        link
      }
    },
    contactColumn {
      title,
      address {
        label,
        text
      },
      phone {
        label,
        number,
        link
      },
      email {
        label,
        address,
        link
      }
    },
    copyright {
      text,
      links[] {
        label,
        link
      }
    }
  }`);
  
  // Normalize all links to have leading slashes
  return normalizeLinks(rawData);
}

// ============================================
// FIXED QUERIES - Fetch from homePage document
// ============================================

/**
 * Get testimonials section data from homePage
 */
export async function getTestimonials() {
  return await client.fetch(`*[_type == "homePage"][0]{
    testimonialsSection {
      subtitle,
      title,
      testimonials[] {
        content,
        authorName,
        authorRole,
        authorImage {
          asset->{
            _id,
            url
          },
          alt
        },
        rating
      }
    }
  }`);
}

/**
 * Get brand logos section data from homePage
 */
export async function getBrandLogos() {
  return await client.fetch(`*[_type == "homePage"][0]{
    brandLogosSection {
      title,
      brands[] {
        name,
        logo {
          asset->{
            _id,
            url
          },
          alt
        },
        url
      }
    }
  }`);
}

/**
 * Get all home page sections data in one query
 */
export async function getHomePageSections() {
  return await client.fetch(`*[_type == "homePage"][0]{
    testimonialsSection {
      subtitle,
      title,
      testimonials[] {
        content,
        authorName,
        authorRole,
        authorImage {
          asset->{
            _id,
            url
          },
          alt
        },
        rating
      }
    },
    brandLogosSection {
      title,
      brands[] {
        name,
        logo {
          asset->{
            _id,
            url
          },
          alt
        },
        url
      }
    },
    heroBanner {
      // Your hero fields here
    },
    servicesSection {
      // Your services fields here
    },
    aboutSection {
      // Your about fields here
    },
    marqueeSection {
      // Your marquee fields here
    },
    portfolioSection {
      // Your portfolio fields here
    },
    whyChooseUsSection {
      // Your why choose us fields here
    },
    pricingSection {
      // Your pricing fields here
    },
    blogSection {
      // Your blog fields here
    }
  }`);
}