// Page Documents
import homePage from './documents/homePage';
import aboutPage from './documents/aboutPage';
import contactPage from './documents/contactPage';
import servicesPage from './documents/servicesPage';
import servicesDetails from './documents/servicesDetails';
import servicesDetailsPage from './documents/servicesDetailsPage';
import blogPage from './documents/blogPage';
import blogPost from './documents/blogPost';

// Global / Site Documents
import header from './documents/header';
import footer from './documents/footer';
import siteSettings from './documents/siteSettings';

// Content / Business Documents
import portfolio from './documents/portfolio';
import { jobListing } from './documents/jobListing';


export const schemaTypes = [
  // Page Documents
  homePage,
  aboutPage,
  contactPage,
  servicesPage,
  servicesDetails,
  servicesDetailsPage,
  blogPage,
  blogPost,

  // Global / Site Documents
  header,
  footer,
  siteSettings,

  // Content / Business Documents
  portfolio,
  jobListing,
];