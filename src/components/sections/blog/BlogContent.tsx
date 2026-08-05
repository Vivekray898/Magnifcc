// src/components/sections/blog/BlogContent.tsx

import React from 'react';
import { PortableText } from '@portabletext/react';

interface Props {
  title: string;
  image: string;
  author: string;
  comments: number;
  content: any;
  quote?: { text: string; author: string };
  shareExperience?: { title: string; content: string };
  galleryImages?: string[];
  bottomSection?: { title: string; content: string };
  tags: string[];
  socialLinks: Array<{ icon: string; url: string }>;
  prevPost: { title: string; link: string };
  nextPost: { title: string; link: string };
  authorBio: {
    name: string;
    avatar: string;
    bio: string;
    socialIcon: string;
    socialLink: string;
  };
}

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="text-base xxl:leading-30 xl:leading-28 leading-26 text-gary font-normal mb-4">
        {children}
      </p>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold text-secondary mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold text-secondary mb-3">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold text-secondary mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-bold text-secondary mb-2">{children}</h4>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-5 mb-4 text-gary">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-5 mb-4 text-gary">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="mb-2 text-base leading-28 text-gary">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="mb-2 text-base leading-28 text-gary">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-secondary">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ value, children }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a
          href={value.href}
          target="_blank"
          rel={rel}
          className="text-primary hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};

export default function BlogContent({
  title,
  image,
  author,
  comments,
  content,
  quote,
  shareExperience,
  galleryImages,
  bottomSection,
  tags,
  socialLinks,
  prevPost,
  nextPost,
  authorBio,
}: Props) {
  return (
    <div className="relative group">
      <h2 className="xxl:text-5.2xl xl:text-4.65xl md:text-3.8xl sm:text-3xl text-2.5xl font-bold py-20 font-sora text-secondary leading-[1.2]">
        {title}
      </h2>
      <figure className="mb-30 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="group-hover:scale-[1.1] group-hover:rotate-[3deg] duration-500"
          loading="lazy"
        />
      </figure>
      <div className="pb-20">
        <div className="inline mr-16">
          <a
            href="javascript:void(0);"
            className="text-gary inline-flex items-center gap-7 font-sora duration-500 hover:text-primary"
          >
            <i>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.43724 7.49957C8.43724 8.0171 8.01722 8.43713 7.4997 8.43713C6.98218 8.43713 6.56216 8.0171 6.56216 7.49957C6.56216 6.98205 6.98218 6.56202 7.4997 6.56202C8.01722 6.56202 8.43724 6.98205 8.43724 7.49957ZM10.6248 6.56202C10.1073 6.56202 9.68729 6.98205 9.68729 7.49957C9.68729 8.0171 10.1073 8.43713 10.6248 8.43713C11.1423 8.43713 11.5624 8.0171 11.5624 7.49957C11.5624 6.98205 11.1423 6.56202 10.6248 6.56202ZM4.37457 6.56202C3.85705 6.56202 3.43704 6.98205 3.43704 7.49957C3.43704 8.0171 3.85705 8.43713 4.37457 8.43713C4.89209 8.43713 5.31211 8.0171 5.31211 7.49957C5.31211 6.98205 4.89209 6.56202 4.37457 6.56202ZM15 7.71209V11.8748C15 13.598 13.5981 15 11.8749 15H8.1766C3.8008 15 0.293159 12.0048 0.0181476 8.03335C-0.132483 5.86073 0.660048 3.73436 2.19261 2.1999C3.72517 0.665438 5.85151 -0.129607 8.02222 0.0172758C11.9349 0.282916 15 3.66248 15 7.71209ZM13.75 7.71209C13.75 4.31752 11.1973 1.48548 7.93784 1.26422C7.79471 1.25422 7.65158 1.24985 7.50907 1.24985C5.84901 1.24985 4.25332 1.90488 3.07702 3.08307C1.79947 4.3619 1.13882 6.13512 1.26507 7.9471C1.49821 11.3098 4.4052 13.7506 8.17723 13.7506H11.8755C12.9093 13.7506 13.7506 12.9093 13.7506 11.8754V7.71271L13.75 7.71209Z"
                  fill="#646464"
                />
              </svg>
            </i>
            By {author}
          </a>
        </div>
        <div className="inline-flex">
          <a
            href="javascript:void(0);"
            className="text-gary inline-flex items-center gap-7 font-sora duration-500 hover:text-primary"
          >
            <i>
              <svg
                width="11"
                height="15"
                viewBox="0 0 11 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 7.5C6.2252 7.5 6.93411 7.28007 7.53709 6.86801C8.14007 6.45596 8.61004 5.87029 8.88756 5.18507C9.16508 4.49984 9.23769 3.74584 9.09621 3.01841C8.95473 2.29099 8.60552 1.6228 8.09273 1.09835C7.57993 0.573905 6.9266 0.216752 6.21533 0.0720569C5.50407 -0.0726377 4.76682 0.00162483 4.09683 0.285454C3.42683 0.569282 2.85418 1.04993 2.45128 1.66661C2.04838 2.2833 1.83333 3.00832 1.83333 3.75C1.8343 4.74426 2.22092 5.69751 2.90835 6.40056C3.59577 7.1036 4.52784 7.49901 5.5 7.5ZM5.5 1.25C5.98347 1.25 6.45607 1.39662 6.85806 1.67133C7.26005 1.94603 7.57336 2.33648 7.75837 2.79329C7.94339 3.25011 7.9918 3.75278 7.89748 4.23773C7.80316 4.72268 7.57035 5.16814 7.22848 5.51777C6.88662 5.8674 6.45106 6.1055 5.97689 6.20197C5.50271 6.29843 5.01122 6.24892 4.56455 6.0597C4.11789 5.87048 3.73612 5.55005 3.46752 5.13893C3.19892 4.72781 3.05556 4.24446 3.05556 3.75C3.05556 3.08696 3.31309 2.45108 3.77152 1.98224C4.22994 1.51339 4.85169 1.25 5.5 1.25Z"
                  fill="#646464"
                />
                <path
                  d="M5.5 8.75C4.04181 8.75165 2.6438 9.34482 1.6127 10.3993C0.5816 11.4539 0.00161752 12.8837 0 14.375C0 14.5408 0.0643847 14.6997 0.17899 14.8169C0.293596 14.9342 0.449034 15 0.611111 15C0.773188 15 0.928626 14.9342 1.04323 14.8169C1.15784 14.6997 1.22222 14.5408 1.22222 14.375C1.22222 13.2147 1.67292 12.1019 2.47515 11.2814C3.27739 10.4609 4.36546 10 5.5 10C6.63454 10 7.72261 10.4609 8.52485 11.2814C9.32708 12.1019 9.77778 13.2147 9.77778 14.375C9.77778 14.5408 9.84216 14.6997 9.95677 14.8169C10.0714 14.9342 10.2268 15 10.3889 15C10.551 15 10.7064 14.9342 10.821 14.8169C10.9356 14.6997 11 14.5408 11 14.375C10.9984 12.8837 10.4184 11.4539 9.3873 10.3993C8.3562 9.34482 6.95819 8.75165 5.5 8.75Z"
                  fill="#646464"
                />
              </svg>
            </i>
            {comments} Comment{comments > 1 ? 's' : ''}
          </a>
        </div>
      </div>

      {/* Portable Text Content */}
      <div className="blog-content">
        {content ? (
          <PortableText value={content} components={portableTextComponents} />
        ) : (
          <p className="text-base xxl:leading-30 xl:leading-28 leading-26 text-gary font-normal">
            No content available.
          </p>
        )}
      </div>

      {/* Quote */}
      {quote && quote.text && (
        <div className="bg-[#f4f4ff] p-30 border-l-5 border-primary mt-50">
          <div className="flex items-center gap-20 pb-20">
            <img src="/assets/img/double-quotes.png" alt="img" />
            <h5 className="lg:text-2xl text-xl font-bold relative font-sora text-secondary md:before:absolute md:before:w-full md:before:h-px md:before:bg-primary md:before:top-12 md:before:right-[-110%]">
              {quote.author || 'Worker At Madula'}
            </h5>
          </div>
          <p className="font-bold text-secondary text-base xxl:leading-30 xl:leading-28 leading-26">
            {quote.text}
          </p>
        </div>
      )}

      {/* Share Experience */}
      {shareExperience && shareExperience.title && (
        <div className="md:py-50 py-30">
          <h3 className="xxl:text-5.2xl xl:text-4.65xl md:text-3.8xl sm:text-3xl text-2.5xl font-bold py-20 font-sora text-secondary leading-[1.2]">
            {shareExperience.title}
          </h3>
          <p className="text-base xxl:leading-30 xl:leading-28 leading-26 text-gary font-normal">
            {shareExperience.content}
          </p>
        </div>
      )}

      {/* Gallery Images */}
      {galleryImages && galleryImages.length > 0 && (
        <div className="grid grid-cols-12 gap-25">
          {galleryImages.map((img, index) => (
            <div className="col-span-6 group" key={index}>
              <div>
                <figure className="overflow-hidden">
                  <img
                    src={img}
                    alt="Gallery image"
                    className="group-hover:scale-[1.1] group-hover:rotate-[3deg] duration-500"
                    loading="lazy"
                  />
                </figure>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Section */}
      {bottomSection && bottomSection.title && (
        <div className="md:py-50 py-30">
          <h3 className="xxl:text-5.2xl xl:text-4.65xl md:text-3.8xl sm:text-3xl text-2.5xl font-bold pb-10 font-sora text-secondary leading-[1.2]">
            {bottomSection.title}
          </h3>
          <p className="text-base xxl:leading-30 xl:leading-28 leading-26 text-gary font-normal">
            {bottomSection.content}
          </p>
        </div>
      )}

      {/* Tags & Social - These are from blogPage settings */}
      <div className="flex items-center justify-between py-30 border-b border-t border-[#D8D8D8] flex-wrap gap-10">
        <h4 className="text-2xl font-bold pr-24 font-sora text-secondary leading-[1.2]">
          Tags Here :
        </h4>
        <ul className="flex gap-10 mr-auto">
          {tags && tags.length > 0 ? (
            tags.map((tag, index) => (
              <li key={index}>
                <a
                  href="javascript:void(0);"
                  className="bg-[#f8f8f8] py-10 px-20 block text-secondary font-sora hover:text-white hover:bg-primary duration-500"
                >
                  {tag}
                </a>
              </li>
            ))
          ) : (
            <li>
              <a
                href="javascript:void(0);"
                className="bg-[#f8f8f8] py-10 px-20 block text-secondary font-sora hover:text-white hover:bg-primary duration-500"
              >
                Wellness
              </a>
            </li>
          )}
        </ul>
        <ul className="flex gap-10">
          {socialLinks && socialLinks.length > 0 ? (
            socialLinks.map((social, index) => (
              <li key={index}>
                <a
                  href={social.url}
                  className="flex items-center justify-center xxl:size-50 size-40 max-xxl:text-sm border border-[#444] rounded-full hover:bg-primary duration-500 hover:text-white hover:border-transparent"
                  target="_blank"
                >
                  <i className={social.icon}></i>
                </a>
              </li>
            ))
          ) : (
            <>
              <li>
                <a
                  href="https://www.facebook.com/"
                  className="flex items-center justify-center xxl:size-50 size-40 max-xxl:text-sm border border-[#444] rounded-full hover:bg-primary duration-500 hover:text-white hover:border-transparent"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/"
                  className="flex items-center justify-center xxl:size-50 size-40 max-xxl:text-sm border border-[#444] rounded-full hover:bg-primary duration-500 hover:text-white hover:border-transparent"
                  target="_blank"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  className="flex items-center justify-center xxl:size-50 size-40 max-xxl:text-sm border border-[#444] rounded-full hover:bg-primary duration-500 hover:text-white hover:border-transparent"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  className="flex items-center justify-center xxl:size-50 size-40 max-xxl:text-sm border border-[#444] rounded-full hover:bg-primary duration-500 hover:text-white hover:border-transparent"
                  target="_blank"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Prev/Next */}
      <div className="justify-between flex mt-60 bg-[#f4f4ff] p-20">
        <a
          href={prevPost.link}
          className="font-bold flex items-center gap-20 text-secondary"
        >
          <i className="bg-primary xxl:size-60 xl:size-50 size-40 flex items-center justify-center hover:bg-secondary duration-500">
            <svg
              width="20"
              height="11"
              viewBox="0 0 20 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.731215 3.66545L3.95657 0.257795C4.03405 0.176108 4.12623 0.111272 4.22779 0.0670259C4.32935 0.0227798 4.43828 0 4.5483 0C4.65832 0 4.76726 0.0227798 4.86882 0.0670259C4.97038 0.111272 5.06256 0.176108 5.14003 0.257795C5.29526 0.421085 5.38239 0.641974 5.38239 0.872218C5.38239 1.10246 5.29526 1.32335 5.14003 1.48664L2.17304 4.61541H19.1666C19.3876 4.61541 19.5996 4.70723 19.7559 4.87067C19.9122 5.03411 20 5.25578 20 5.48693C20 5.71807 19.9122 5.93974 19.7559 6.10319C19.5996 6.26663 19.3876 6.35845 19.1666 6.35845H2.12303L5.14003 9.50464C5.21815 9.58566 5.28015 9.68205 5.32246 9.78826C5.36477 9.89446 5.38656 10.0084 5.38656 10.1234C5.38656 10.2385 5.36477 10.3524 5.32246 10.4586C5.28015 10.5648 5.21815 10.6612 5.14003 10.7422C5.06256 10.8239 4.97038 10.8887 4.86882 10.933C4.76726 10.9772 4.65832 11 4.5483 11C4.43828 11 4.32935 10.9772 4.22779 10.933C4.12623 10.8887 4.03405 10.8239 3.95657 10.7422L0.731215 7.3607C0.262995 6.87047 0 6.20594 0 5.51307C0 4.82021 0.262995 4.15568 0.731215 3.66545Z"
                fill="white"
              />
            </svg>
          </i>
          {prevPost.title}
        </a>
        <a
          href={nextPost.link}
          className="font-bold flex items-center gap-20 text-secondary"
        >
          {nextPost.title}
          <i className="bg-primary xxl:size-60 xl:size-50 size-40 flex items-center justify-center hover:bg-secondary duration-500">
            <svg
              width="20"
              height="11"
              viewBox="0 0 20 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.2688 3.66545L16.0434 0.257795C15.966 0.176108 15.8738 0.111272 15.7722 0.0670259C15.6707 0.0227798 15.5617 0 15.4517 0C15.3417 0 15.2327 0.0227798 15.1312 0.0670259C15.0296 0.111272 14.9374 0.176108 14.86 0.257795C14.7047 0.421085 14.6176 0.641974 14.6176 0.872218C14.6176 1.10246 14.7047 1.32335 14.86 1.48664L17.827 4.61541H0.833425C0.612387 4.61541 0.400402 4.70723 0.244105 4.87067C0.087807 5.03411 0 5.25578 0 5.48693C0 5.71807 0.087807 5.93974 0.244105 6.10319C0.400402 6.26663 0.612387 6.35845 0.833425 6.35845H17.877L14.86 9.50464C14.7819 9.58566 14.7198 9.68205 14.6775 9.78826C14.6352 9.89446 14.6134 10.0084 14.6134 10.1234C14.6134 10.2385 14.6352 10.3524 14.6775 10.4586C14.7198 10.5648 14.7819 10.6612 14.86 10.7422C14.9374 10.8239 15.0296 10.8887 15.1312 10.933C15.2327 10.9772 15.3417 11 15.4517 11C15.5617 11 15.6707 10.9772 15.7722 10.933C15.8738 10.8887 15.966 10.8239 16.0434 10.7422L19.2688 7.3607C19.737 6.87047 20 6.20594 20 5.51307C20 4.82021 19.737 4.15568 19.2688 3.66545Z"
                fill="white"
              />
            </svg>
          </i>
        </a>
      </div>

      {/* Author Bio */}
      {authorBio && authorBio.name && (
        <div className="border border-lightgary xxl:p-50 xl:p-40 p-20 flex items-center sm:gap-35 gap-20 relative sm:mt-60 mt-30 max-sm:flex-wrap">
          <img src={authorBio.avatar} alt={authorBio.name} loading="lazy" />
          <div>
            <h5 className="text-2xl font-bold font-sora text-secondary">
              {authorBio.name}
            </h5>
            <p className="text-base xxl:leading-30 xl:leading-28 leading-26 text-gary font-normal pt-12">
              {authorBio.bio}
            </p>
            <a
              href={authorBio.socialLink || 'javascript:void(0);'}
              className="bg-black text-white absolute size-40 rounded-full flex items-center justify-center lg:top-20 top-15 lg:right-20 right-25 font-sora hover:bg-primary duration-500"
              target="_blank"
            >
              <i className={authorBio.socialIcon || 'fa-brands fa-x-twitter'}></i>
            </a>
          </div>
        </div>
      )}

      <style>{`
        .blog-content p {
          margin-bottom: 1rem;
        }
        .blog-content ul, .blog-content ol {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
        }
        .blog-content li {
          margin-bottom: 0.5rem;
        }
        .blog-content h1, .blog-content h2, .blog-content h3, .blog-content h4 {
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .blog-content a {
          color: #F05DA8;
        }
        .blog-content a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}