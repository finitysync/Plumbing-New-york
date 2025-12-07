import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { AboutPage } from './components/AboutPage';
import { FreeQuote } from './components/FreeQuote';
import { BlogPage, BLOG_POSTS } from './components/BlogPage';
import { BlogPostTemplate } from './components/BlogPostTemplate';
import { ContactPage } from './components/ContactPage';
import { ServicesPage } from './components/ServicesPage';
import { Footer } from './components/Footer';
import { PageView, BlogPost } from './types';
import { AnimatedPage } from './components/AnimatedPage';

function App() {
  // Initialize state from URL
  const getInitialPage = (): PageView => {
    const path = window.location.pathname.substring(1);
    if (path === '') return 'home';
    
    // Check if it's a blog post
    const postId = path;
    const post = BLOG_POSTS.find(p => p.id === postId);
    if (post) {
      // Redirect to new URL format
      window.history.replaceState({}, '', `/blog/${post.slug}`);
      setSelectedPost(post);
      return 'blog-post';
    }
    
    // Check if it's a valid page
    const validPages: PageView[] = ['home', 'about', 'services', 'quote', 'blog', 'contact'];
    if (validPages.includes(path as PageView)) {
      return path as PageView;
    }
    
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageView>(getInitialPage);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [blogSearchTerm, setBlogSearchTerm] = useState('');
  const [blogCategory, setBlogCategory] = useState('All');

  // Handle navigation between pages
  const handleNavigate = (page: PageView, slug?: string) => {
    if (page === 'blog-post' && slug) {
      const post = BLOG_POSTS.find(p => p.slug === slug);
      if (post) {
        setSelectedPost(post);
        setCurrentPage('blog-post');
        window.history.pushState({}, '', `/blog/${slug}`);
      }
    } else {
      setCurrentPage(page);
      window.history.pushState({}, '', page === 'home' ? '/' : `/${page}`);
    }
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.substring(1) || 'home';
      if (path === currentPage) return;
      
      // Check if it's a blog post
      const postId = path;
      const post = BLOG_POSTS.find(p => p.id === postId);
      
      if (post) {
        setSelectedPost(post);
        setCurrentPage('blog-post');
      } else {
        setCurrentPage(path as PageView);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentPage]);

  const navigateTo = (page: PageView, post?: BlogPost, searchTerm?: string, category?: string) => {
    // Update URL and state based on page type
    if (page === 'blog-post' && post) {
      const url = `/blog/${post.slug}`;
      window.history.pushState({}, '', url);
      setSelectedPost(post);
    } else if (page === 'home') {
      window.history.pushState({}, '', '/');
    } else if (page === 'blog') {
      const params = new URLSearchParams();
      if (searchTerm) params.set('q', searchTerm);
      if (category && category !== 'All') params.set('category', category);
      const url = params.toString() ? `/blog?${params.toString()}` : '/blog';
      window.history.pushState({}, '', url);
    } else {
      window.history.pushState({}, '', `/${page}`);
    }
    
    // Update state
    setCurrentPage(page);
    if (searchTerm !== undefined) setBlogSearchTerm(searchTerm);
    if (category !== undefined) setBlogCategory(category);
    
    // Scroll to top
    else {
      window.history.pushState({}, '', `/${page}`);
    }

    // Update the current page and scroll to top
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Update URL when currentPage changes
  useEffect(() => {
    if (currentPage === 'home') {
      window.history.pushState({}, '', '/');
    } else if (currentPage === 'blog-post' && selectedPost) {
      window.history.pushState({}, '', `/${selectedPost.id}`);
    } else {
      window.history.pushState({}, '', `/${currentPage}`);
    }
  }, [currentPage, selectedPost]);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      <Header activePage={currentPage === 'blog-post' ? 'blog' : currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <AnimatedPage key="home">
              <Hero onNavigate={handleNavigate} />
              <Services />
              <About />
              <Testimonials />
              <Contact />
            </AnimatedPage>
          )}
          {currentPage === 'about' && (
            <AnimatedPage key="about">
              <AboutPage onNavigate={(page) => handleNavigate(page)} />
            </AnimatedPage>
          )}
          {currentPage === 'services' && (
            <AnimatedPage key="services">
              <ServicesPage onNavigate={handleNavigate} />
            </AnimatedPage>
          )}
          {currentPage === 'quote' && (
            <AnimatedPage key="quote">
              <FreeQuote />
            </AnimatedPage>
          )}
          {currentPage === 'blog' && (
            <AnimatedPage key="blog">
              <BlogPage onNavigate={handleNavigate} initialSearchTerm={blogSearchTerm} initialCategory={blogCategory} />
            </AnimatedPage>
          )}
          {currentPage === 'blog-post' && selectedPost && (
            <AnimatedPage key="blog-post">
              <BlogPostTemplate 
                post={selectedPost} 
                recentPosts={BLOG_POSTS.filter(p => p.id !== selectedPost.id)}
                onNavigate={handleNavigate}
              />
            </AnimatedPage>
          )}
          {currentPage === 'contact' && (
            <AnimatedPage key="contact">
              <ContactPage />
            </AnimatedPage>
          )}
        </AnimatePresence>
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;