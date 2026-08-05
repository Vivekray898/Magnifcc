// src/lib/sanity-image.ts
import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity';

const builder = imageUrlBuilder(client);

export function imageUrlFor(source: any) {
  return builder.image(source);
}