// src/lib/queries.ts

import { client } from './sanity';

// Helper function to ensure links have leading slashes
function normalizeLinks(obj: any): any {
  if (!obj) return obj;
  
  if (Array.isArray(obj)) {
    return obj.map(item => normalizeLinks(item));
  }
  
  if (typeof obj === 'object' && obj !== null) {
    const result: any = {};
    for (const [key, value] of Object.entries(obj)) {
      if (key === 'link' && typeof value === 'string' && value) {
        if (
          !value.startsWith('/') && 
          !value.startsWith('#') &&
          !value.startsWith('javascript:') && 
          !value.startsWith('tel:') &&
          !value.startsWith('mailto:') && 
          !value.includes('://')
        ) {
          result[key] = '/' + value;
        } else {
          result[key] = value;
        }
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
      tagline,
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
      addresses[] { 
        label, 
        text, 
        mapLink 
      },
      phones[] { 
        label, 
        number 
      },
      emails[] { 
        label, 
        address 
      },
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
    whatsapp { 
      enabled, 
      phoneNumber, 
      message, 
      position, 
      size, 
      showTooltip, 
      tooltipText, 
      bottomOffset 
    },
    copyright { 
      text, 
      links[] { 
        label, 
        link 
      } 
    }
  }`);
  
  return normalizeLinks(rawData);
}

// ============================================
// HOME PAGE QUERIES
// ============================================

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
    }
  }`);
}

// ============================================
// CAREERS/JOB LISTINGS QUERIES (with rich text)
// ============================================

/**
 * Get all active job listings for the Careers overview page
 * Fetches description as rich text array
 */
export async function getJobListings() {
  return await client.fetch(`*[_type == "jobListing"] | order(_createdAt desc) {
    _id,
    _createdAt,
    jobTitle,
    "slug": slug.current,
    department,
    location,
    jobType,
    experience,
    salary,
    // Get description as rich text array
    description,
    requirements,
    applyLink
  }`);
}

/**
 * Get a single job listing by its slug (for the details page)
 * Fetches full rich text description
 */
export async function getSingleJob(slug: string) {
  return await client.fetch(`*[_type == "jobListing" && slug.current == $slug][0] {
    _id,
    _createdAt,
    jobTitle,
    "slug": slug.current,
    department,
    location,
    jobType,
    experience,
    salary,
    description,
    requirements,
    applyLink
  }`, { slug });
}

// ============================================
// FILTER HELPERS (based on string fields)
// ============================================

/**
 * Get unique departments from all job listings
 */
export async function getUniqueDepartments() {
  const jobs = await getJobListings();
  const departments = [...new Set(jobs.map((job: any) => job.department).filter(Boolean))];
  return departments.sort();
}

/**
 * Get unique locations from all job listings
 */
export async function getUniqueLocations() {
  const jobs = await getJobListings();
  const locations = [...new Set(jobs.map((job: any) => job.location).filter(Boolean))];
  return locations.sort();
}

/**
 * Get unique job types from all job listings
 */
export async function getUniqueJobTypes() {
  const jobs = await getJobListings();
  const jobTypes = [...new Set(jobs.map((job: any) => job.jobType).filter(Boolean))];
  return jobTypes.sort();
}

/**
 * Get filtered job listings by string fields (client-side filtering)
 * Note: Search is performed on jobTitle only since description is rich text
 * For better search, consider using GROQ with `pt::text()` or a search index
 */
export async function getFilteredJobListings(filters?: {
  department?: string;
  location?: string;
  jobType?: string;
  search?: string;
}) {
  const jobs = await getJobListings();
  
  return jobs.filter((job: any) => {
    let matches = true;
    
    if (filters?.department && job.department !== filters.department) {
      matches = false;
    }
    if (filters?.location && job.location !== filters.location) {
      matches = false;
    }
    if (filters?.jobType && job.jobType !== filters.jobType) {
      matches = false;
    }
    if (filters?.search) {
      const searchLower = filters.search.toLowerCase();
      const jobTitleMatch = job.jobTitle?.toLowerCase().includes(searchLower);
      // Description is rich text, so we can't easily search it client-side
      // If you need description search, use GROQ with pt::text(description) in the query
      if (!jobTitleMatch) {
        matches = false;
      }
    }
    
    return matches;
  });
}