// sanity/schemaTypes/index.ts

import homePage from './documents/homePage';
import aboutPage from './documents/aboutPage';
import contactPage from './documents/contactPage';
import servicesPage from './documents/servicesPage';
import servicesDetails from './documents/servicesDetails';
import servicesDetailsPage from './documents/servicesDetailsPage';
import blogPage from './documents/blogPage';
import blogPost from './documents/blogPost';
import header from './documents/header';
import footer from './documents/footer';
import siteSettings from './documents/siteSettings';
import portfolio from './documents/portfolio'; // Add this import

export const schemaTypes = [
  homePage,
  aboutPage,
  contactPage,
  servicesPage,
  servicesDetails,
  servicesDetailsPage,
  blogPage,
  blogPost,
  header,
  footer,
  siteSettings,
  portfolio, // Add portfolio to the schema array
];