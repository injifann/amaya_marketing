import React from "react";
import { Link } from "react-router-dom"; 
import fm from "front-matter";

const allPostFiles = import.meta.glob("../posts/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});


// Parse Markdown frontmatter safely in the browser
const posts = Object.entries(allPostFiles)
  .map(([path, rawContent]) => {
    const slug = path.split("/").pop()?.replace(".md", "");
    if (!slug) return null;

    const { attributes } = fm(rawContent); // front-matter metadata

    return {
      slug,
      id: slug,
      title: attributes.title || "Untitled",
      excerpt: attributes.excerpt || "No excerpt available",
      category: attributes.category || "General",
      date: attributes.date || "No date",
      image:
        attributes.image ||
        "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80",
    };
  })
  .filter(Boolean) // remove nulls
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // newest first
  

export default function BlogPage() {
  const featuredPost = posts[0];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Amaya Marketing Insights
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Stay ahead with expert insights, strategies, and trends in digital
            marketing to grow your brand and dominate your industry.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">
            Featured Article
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center bg-white shadow-lg rounded-2xl overflow-hidden">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-full object-cover"
            />
            <div className="p-8">
              <span className="text-indigo-600 font-semibold text-sm">
                {featuredPost.category}
              </span>
              <h3 className="text-3xl font-bold mt-2 mb-4 text-gray-800">
                {featuredPost.title}
              </h3>
              <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-indigo-600 font-medium">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-indigo-600 hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-center text-gray-600 mt-10">
            No posts yet — add some .md files in src/posts/
          </p>
        )}
      </section>
    </div>
  );
}