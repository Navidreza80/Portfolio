/* eslint-disable */
// @ts-nocheck

"use client";

import type { Element } from "hast";
import "highlight.js/styles/github-dark.css";
import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface MarkdownRendererProps {
  content: string;
}

interface CodeProps {
  node?: Element;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

interface HeadingProps {
  node?: Element;
  children?: React.ReactNode;
  [key: string]: any;
}

interface ImageProps {
  node?: Element;
  alt?: string;
  src?: string;
  [key: string]: any;
}

interface TableProps {
  node?: Element;
  children?: React.ReactNode;
  [key: string]: any;
}

interface LinkProps {
  node?: Element;
  href?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);
  const [showToc, setShowToc] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Extract headings from content
  useEffect(() => {
    const extractedHeadings: Heading[] = [];

    // Create a temporary div to parse the HTML
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;

    // Find all h1, h2, h3 elements
    const headingElements = tempDiv.querySelectorAll("h1, h2, h3");

    headingElements.forEach((heading) => {
      const textContent = heading.textContent || "";
      const id = textContent
        .toLowerCase()
        .replace(/[^\w]+/g, "-")
        .replace(/(^-|-$)/g, "");

      heading.id = id;

      extractedHeadings.push({
        id,
        text: textContent,
        level: parseInt(heading.tagName.substring(1)),
      });
    });

    setHeadings(extractedHeadings);
  }, [content]);

  const generateSlug = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[^\w]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const scrollToHeading = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
    }
  };

  const handleTocClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    headingId: string
  ): void => {
    e.preventDefault();
    scrollToHeading(headingId);
  };

  const handleMobileTocClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    headingId: string
  ): void => {
    e.preventDefault();
    scrollToHeading(headingId);
    setShowToc(false);
  };

  const components: Components = {
    img: ({ node, alt, src, ...props }: ImageProps) => (
      <span className="flex justify-center my-6">
        <img
          {...props}
          src={src}
          className="max-w-full rounded-lg shadow-md my-4 mx-auto"
          alt={alt || "image"}
          loading="lazy"
        />
      </span>
    ),
    code: ({ node, inline, className, children, ...props }: CodeProps) => {
      const match = /language-(\w+)/.exec(className || "");
      const language = match ? match[1] : "";

      return !inline ? (
        <div className="relative my-6 group">
          <div className="absolute right-2 top-2 flex items-center">
            {language && (
              <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded mr-2">
                {language}
              </span>
            )}
          </div>
          <pre className="overflow-x-auto rounded-lg bg-gray-100 dark:bg-gray-800 p-4 pt-10">
            <code className={className} {...props}>
              {children}
            </code>
          </pre>
        </div>
      ) : (
        <code
          className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm font-mono"
          {...props}
        >
          {children}
        </code>
      );
    },
    h1: ({ node, children, ...props }: HeadingProps) => {
      const id = children ? generateSlug(children.toString()) : "";
      return (
        <h1
          id={id}
          className="text-4xl font-bold mt-10 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700"
          {...props}
        >
          {children}
        </h1>
      );
    },
    h2: ({ node, children, ...props }: HeadingProps) => {
      const id = children ? generateSlug(children.toString()) : "";
      return (
        <h2 id={id} className="text-3xl font-semibold mt-8 mb-4" {...props}>
          {children}
        </h2>
      );
    },
    h3: ({ node, children, ...props }: HeadingProps) => {
      const id = children ? generateSlug(children.toString()) : "";
      return (
        <h3 id={id} className="text-2xl font-semibold mt-6 mb-3" {...props}>
          {children}
        </h3>
      );
    },
    blockquote: ({ node, ...props }: TableProps) => (
      <blockquote
        className="border-l-4 border-blue-500 italic my-6 pl-4 bg-blue-50 dark:bg-blue-900/20 py-2 rounded-r"
        {...props}
      />
    ),
    table: ({ node, ...props }: TableProps) => (
      <div className="overflow-x-auto my-6 rounded-lg shadow-sm">
        <table
          className="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
          {...props}
        />
      </div>
    ),
    th: ({ node, ...props }: TableProps) => (
      <th
        className="px-4 py-3 bg-gray-100 dark:bg-gray-800 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider"
        {...props}
      />
    ),
    td: ({ node, ...props }: TableProps) => (
      <td
        className="px-4 py-3 border-t border-gray-200 dark:border-gray-700"
        {...props}
      />
    ),
    a: ({ node, href, children, ...props }: LinkProps) => (
      <a
        className="text-blue-600 dark:text-blue-400 hover:underline"
        href={href}
        {...props}
      >
        {children}
      </a>
    ),
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 relative">
      {/* Table of Contents - Desktop */}
      {headings.length > 0 && (
        <>
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                Table of Contents
              </h3>
              <nav className="space-y-2 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                {headings.map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    onClick={(e) => handleTocClick(e, heading.id)}
                    className={`block py-1 text-sm transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                      activeId === heading.id
                        ? "text-blue-600 dark:text-blue-400 font-medium"
                        : "text-gray-600 dark:text-gray-400"
                    } ${
                      heading.level === 2
                        ? "pl-4"
                        : heading.level === 3
                        ? "pl-8"
                        : ""
                    }`}
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Mobile TOC Toggle */}
          <button
            className="lg:hidden fixed bottom-6 right-16 z-40 bg-blue-600 text-white p-3 rounded-full shadow-lg"
            onClick={() => setShowToc(!showToc)}
            type="button"
            aria-label="Toggle table of contents"
          >
            <Menu size={20} />
          </button>
        </>
      )}

      {/* Mobile Table of Contents */}
      {showToc && headings.length > 0 && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white dark:bg-gray-900 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Table of Contents</h3>
            <button
              className="text-gray-500 hover:text-gray-800 dark:hover:text-white"
              onClick={() => setShowToc(false)}
              type="button"
              aria-label="Close table of contents"
            >
              ✕
            </button>
          </div>
          <nav className="space-y-2">
            {headings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                onClick={(e) => handleMobileTocClick(e, heading.id)}
                className={`block py-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                  activeId === heading.id
                    ? "text-blue-600 dark:text-blue-400 font-medium"
                    : "text-gray-800 dark:text-gray-200"
                } ${
                  heading.level === 2
                    ? "pl-4"
                    : heading.level === 3
                    ? "pl-8"
                    : ""
                }`}
              >
                {heading.text}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <div ref={contentRef} className="flex-1 min-w-0">
        <div className="prose dark:prose-invert prose-lg max-w-full text-foreground">
          <ReactMarkdown
            children={content}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            components={components}
          />
        </div>
      </div>
    </div>
  );
}
