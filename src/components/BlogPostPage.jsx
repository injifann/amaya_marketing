import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import fm from "front-matter";
import { ArrowLeftIcon } from "@heroicons/react/24/outline"; // or your icon library

// Eager load all markdown files
const allPostFiles = import.meta.glob("../posts/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

export default function BlogPostPage() {
  const { slug } = useParams();

  const rawContent = allPostFiles[`../posts/${slug}.md`];

  if (!rawContent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            404 — Post Not Found
          </h1>
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            ← Back to all posts
          </Link>
        </div>
      </div>
    );
  }

  const { attributes, body } = fm(rawContent);

  // Rough reading time estimate
  const wordCount = body.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 225); // ~225 wpm

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Sticky header */}
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to blog
          </Link>

          <span className="text-sm text-gray-500 dark:text-gray-400">
            {attributes.date} • {readingTime} min read
          </span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <header className="mb-12 lg:mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
            {attributes.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <time dateTime={attributes.date}>{attributes.date}</time>
            <span>•</span>
            <span>{readingTime} min read</span>
            {attributes.author && (
              <>
                <span>•</span>
                <span>By {attributes.author}</span>
              </>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {attributes.image && (
          <figure className="mb-12 lg:mb-16 -mx-4 sm:-mx-6 lg:-mx-8 xl:-mx-0">
            <img
              src={attributes.image}
              alt={attributes.title}
              className="w-full h-auto aspect-[16/9] object-cover rounded-2xl shadow-xl"
              loading="lazy"
            />
          </figure>
        )}

        {/* Markdown content */}
        <div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Thanks for reading! Found this helpful?
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 text-base font-medium rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            >
              ← More articles
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}