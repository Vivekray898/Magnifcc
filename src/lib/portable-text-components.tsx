// src/lib/portable-text-components.tsx
import { type PortableTextComponents } from '@portabletext/react';
import { imageUrlFor } from './sanity-image';

export const richComponents: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      const src = value?.asset?._ref
        ? imageUrlFor(value).width(1200).url()
        : '';
      if (!src) return null;
      return (
        <figure className="my-6">
          <img src={src} alt={value.alt || ''} className="w-full rounded-xl" loading="lazy" />
          {value.caption && (
            <figcaption className="text-center text-sm text-gary mt-2">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="xxl:text-3xl xl:text-2xl text-xl font-bold text-secondary font-sora mt-8 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="xxl:text-2.3xl xl:text-2xl text-lg font-bold text-secondary font-sora mt-6 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="xxl:text-xl xl:text-lg text-base font-bold text-secondary font-sora mt-5 mb-2">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-5 my-6 italic text-gary">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="text-base xxl:leading-30 xl:leading-28 leading-26 text-gary font-normal my-4">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 my-4 space-y-2 text-gary text-base leading-7">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 my-4 space-y-2 text-gary text-base leading-7">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-secondary">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono">{children}</code>
    ),
    underline: ({ children }) => <u>{children}</u>,
    'strike-through': ({ children }) => <s>{children}</s>,
    link: ({ children, value }: any) => (
      <a
        href={value?.href || '#'}
        className="text-primary hover:underline"
        target={value?.blank ? '_blank' : undefined}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
  },
  hardbreak: () => <br />,
};