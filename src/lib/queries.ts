// src/lib/queries.ts

import { client } from './sanity';

// ... existing queries ...

export async function getHeader() {
  return await client.fetch(`*[_type == "header"][0]{
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
}

export async function getFooter() {
  return await client.fetch(`*[_type == "footer"][0]{
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
}