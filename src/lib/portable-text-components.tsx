// src/lib/portable-text-components.tsx
import { type PortableTextComponents } from '@portabletext/react';
import { imageUrlFor } from './sanity-image';

/**
 * All rich-text styling uses semantic `rt-*` classes styled with plain CSS
 * (see .rich-content styles in ServicesDetailsContent.astro / global CSS).
 * This guarantees correct spacing/line-height for ANY pasted content length,
 * regardless of the Tailwind config.
 */
export const richComponents: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      const src = value?.asset?._ref
        ? imageUrlFor(value).width(1200).url()
        : value?.asset?.url || '';
      if (!src) return null;
      return (
        <figure className="rt-figure">
          <img src={src} alt={value.alt || ''} loading="lazy" />
          {value.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => <h2 className="rt-h2">{children}</h2>,
    h3: ({ children }) => <h3 className="rt-h3">{children}</h3>,
    h4: ({ children }) => <h4 className="rt-h4">{children}</h4>,
    blockquote: ({ children }) => <blockquote className="rt-blockquote">{children}</blockquote>,
    normal: ({ children }) => <p className="rt-p">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="rt-ul">{children}</ul>,
    number: ({ children }) => <ol className="rt-ol">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="rt-li">{children}</li>,
    number: ({ children }) => <li className="rt-li">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="rt-strong">{children}</strong>,
    em: ({ children }) => <em className="rt-em">{children}</em>,
    underline: ({ children }) => <u className="rt-u">{children}</u>,
    'strike-through': ({ children }) => <s className="rt-s">{children}</s>,
    code: ({ children }) => <code className="rt-code">{children}</code>,
    link: ({ children, value }: any) => (
      <a
        href={value?.href || '#'}
        className="rt-link"
        target={value?.blank ? '_blank' : undefined}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
  },
  hardbreak: () => <br />,
};