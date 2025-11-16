import React from "react";
import Btn from "../../shared/Btn";

// Sample blog posts
const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Best Products Online",
    date: "Nov 10, 2025",
    summary:
      "Learn tips and tricks to pick the best products when shopping online.",
    link: "/blog/product-selection",
  },
  {
    id: 2,
    title: "Top 10 Web Development Tools in 2025",
    date: "Nov 8, 2025",
    summary:
      "A curated list of the most useful tools for modern web developers.",
    link: "/blog/web-tools-2025",
  },
  {
    id: 3,
    title: "React Tips for Beginners",
    date: "Nov 5, 2025",
    summary:
      "Practical React tips to improve your development workflow quickly.",
    link: "/blog/react-tips",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">From Our Blog</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.summary}</p>

              <Btn text=" Read More →"></Btn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
