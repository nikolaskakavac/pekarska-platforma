import React, { useState } from 'react';
import './BlogPage.css';
import { blogPosts } from '../data/blogPosts';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function BlogPage() {
  const { subscriptionLevel } = useAuth();
  const navigate = useNavigate();
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Sve');

  const categories = ['Sve', 'Hleb', 'Peciva', 'Kolači', 'Tehnike', 'Dekoracija'];

  const hasBlogAccess = subscriptionLevel === 'premium';

  const filteredPosts = selectedCategory === 'Sve' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  if (!hasBlogAccess) {
    return (
      <div className="blog-locked-container">
        <div className="blog-locked">
          <div className="lock-icon">🔒</div>
          <h2>Blog je dostupan samo za Premium korisnike</h2>
          <p>Pridružite se Premium pretplati i dobijte pristup ekskluzivnim člancima, receptima i savetima od profesionalnih pekara.</p>
          <button 
            className="upgrade-btn"
            onClick={() => navigate('/contact')}
          >
            Kontaktirajte nas za Premium
          </button>
        </div>
      </div>
    );
  }

  if (selectedPost) {
    return (
      <div className="blog-page">
        <div className="blog-post-full">
          <button className="back-btn" onClick={() => setSelectedPost(null)}>
            ← Nazad na blog
          </button>
          <h1>{selectedPost.title}</h1>
          <div className="post-meta">
            <span className="author">👤 {selectedPost.author}</span>
            <span className="date">📅 {selectedPost.date}</span>
            <span className="category">🏷️ {selectedPost.category}</span>
          </div>
          <div className="post-content">
            {selectedPost.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>📝 Kulinarski Blog</h1>
        <p>Ekskluzivni članci, saveti i trikovi za Premium korisnike</p>
      </div>

      <div className="blog-categories">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="blog-posts">
        {filteredPosts.map(post => (
          <div key={post.id} className="blog-card">
            <div className="blog-card-header">
              <span className="blog-category">{post.category}</span>
              <span className="blog-date">{post.date}</span>
            </div>
            <h3>{post.title}</h3>
            <p className="blog-excerpt">{post.excerpt}</p>
            <div className="blog-card-footer">
              <span className="blog-author">✍️ {post.author}</span>
              <button 
                className="read-more-btn"
                onClick={() => setSelectedPost(post)}
              >
                Pročitaj više →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
