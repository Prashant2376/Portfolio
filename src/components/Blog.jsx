import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUser,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: What's Next?",
    excerpt:
      "Exploring upcoming trends and technologies that will shape the future of web development...",
    category: "Technology",
    author: "John Doe",
    readTime: "5 min",
    date: "Mar 10, 2024",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Mastering Modern CSS Techniques",
    excerpt:
      "Deep dive into advanced CSS features and best practices for modern web design...",
    category: "Design",
    author: "Jane Smith",
    readTime: "4 min",
    date: "Mar 8, 2024",
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
    featured: true,
  },
  {
    id: 3,
    title: "React Performance Optimization",
    excerpt:
      "Learn how to optimize your React applications for better performance...",
    category: "Development",
    author: "Mike Johnson",
    readTime: "6 min",
    date: "Mar 5, 2024",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "UI/UX Design Principles",
    excerpt:
      "Essential principles for creating user-friendly and aesthetically pleasing interfaces...",
    category: "Design",
    author: "Sarah Wilson",
    readTime: "3 min",
    date: "Mar 3, 2024",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    featured: false,
  },
];

const categories = ["All", "Technology", "Design", "Development"];

const Blog = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="blog">
      <motion.div
        className="blog-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="blog-header" variants={itemVariants}>
          <span className="section-subtitle">Latest Articles</span>
          <h2>Insights & Updates</h2>
          <p>
            Discover the latest trends, insights, and updates in technology and
            development.
          </p>
        </motion.div>

        <motion.div className="blog-categories" variants={itemVariants}>
          {categories.map((category) => (
            <button key={category} className="category-btn">
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div className="featured-posts" variants={itemVariants}>
          {blogPosts
            .filter((post) => post.featured)
            .map((post) => (
              <motion.article
                key={post.id}
                className="featured-post"
                whileHover={{ y: -5 }}
              >
                <div className="featured-post-image">
                  <img src={post.image} alt={post.title} />
                  <span className="category-tag">{post.category}</span>
                </div>
                <div className="featured-post-content">
                  <div className="post-meta">
                    <span>
                      <FontAwesomeIcon icon={faUser} />
                      {post.author}
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faClock} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <button className="read-more">
                    Read More <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </motion.article>
            ))}
        </motion.div>

        <motion.div className="blog-grid" variants={itemVariants}>
          {blogPosts
            .filter((post) => !post.featured)
            .map((post) => (
              <motion.article
                key={post.id}
                className="blog-post"
                whileHover={{ y: -5 }}
              >
                <div className="post-image">
                  <img src={post.image} alt={post.title} />
                  <span className="category-tag">{post.category}</span>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span>
                      <FontAwesomeIcon icon={faUser} />
                      {post.author}
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faClock} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <button className="read-more">
                    Read More <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </motion.article>
            ))}
        </motion.div>

        <motion.div className="blog-newsletter" variants={itemVariants}>
          <div className="newsletter-content">
            <h3>Subscribe to Our Newsletter</h3>
            <p>
              Get the latest articles and insights delivered straight to your
              inbox.
            </p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Blog;
