// src/lib/sanity-image.ts
import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity';

const builder = imageUrlBuilder(client);

// Export as both named and default for flexibility
export function urlFor(source: any) {
  return builder.image(source);
}

export function imageUrlFor(source: any) {
  return builder.image(source);
}

export default urlFor;