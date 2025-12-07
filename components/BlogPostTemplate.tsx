import React, { useEffect, useRef, useState } from 'react';
import { Calendar, User, Tag, Clock, ChevronRight, Facebook, Twitter, Linkedin, Link as LinkIcon, MessageSquare, ArrowRight, Search } from 'lucide-react';
import { BlogPost } from '../types';
import { Button } from './Button';
import { CATEGORIES } from './BlogPage';
import gsap from 'gsap';

interface BlogPostTemplateProps {
  post: BlogPost;
  recentPosts: BlogPost[];
  onNavigate: (page: 'blog' | 'blog-post', post?: BlogPost, searchTerm?: string, category?: string) => void;
}

export const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ post, recentPosts, onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.from('.post-title', { y: 30, opacity: 0, duration: 1, ease: 'power3.out' });
      gsap.from('.post-meta', { y: 20, opacity: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' });
      gsap.from('.post-image', { scale: 0.95, opacity: 0, duration: 1, delay: 0.3, ease: 'power2.out' });

      // Content Stagger
      gsap.from('.post-content > *', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.5,
        scrollTrigger: {
          trigger: '.post-content',
          start: 'top 80%',
        }
      });

      // Sidebar Animation
      gsap.from(sidebarRef.current, { x: 20, opacity: 0, duration: 1, delay: 0.6, ease: 'power3.out' });
    }, containerRef);

    return () => ctx.revert();
  }, [post.id]);

  // Social Share placeholder function
  const handleShare = (platform: string) => {
    alert(`Shared to ${platform}!`);
  };

  const handleSearchKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      onNavigate('blog', undefined, searchQuery.trim());
    }
  };

  const handleSearchClick = () => {
    if (searchQuery.trim()) {
      onNavigate('blog', undefined, searchQuery.trim());
    }
  };

  return (
    <div ref={containerRef} className="pt-24 pb-20 bg-white min-h-screen font-sans">

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center text-sm text-gray-500 space-x-2">
          <button onClick={() => onNavigate('blog')} className="hover:text-brand-600 transition-colors">Blog</button>
          <ChevronRight size={14} />
          <span className="text-brand-600 font-medium truncate max-w-[200px] sm:max-w-md">{post.title}</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">

          {/* Main Content Column */}
          <main className="lg:col-span-8">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-brand-600 text-xs font-bold uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-gray-400 text-xs flex items-center gap-1">
                  <Clock size={12} /> 5 min read
                </span>
              </div>
              <h1 className="post-title text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {post.title}
              </h1>
              <div className="post-meta flex items-center justify-between border-y border-gray-100 py-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{post.author}</p>
                      <p className="text-xs text-gray-500">Master Plumber</p>
                    </div>
                  </div>
                  <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
                  <div className="text-sm text-gray-500 flex items-center gap-2">
                    <Calendar size={16} />
                    {post.date}
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="post-image rounded-2xl overflow-hidden shadow-lg mb-10 aspect-video relative group">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Article Body */}
            <article
              className="post-content prose prose-lg prose-blue max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p><p>Content pending...</p>` }}
            />

            {/* Tags & Share Footer */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex flex-wrap gap-2">
                  <Tag size={16} className="text-gray-400 mt-1" />
                  {['Plumbing Tips', 'NYC', 'Home Maintenance', 'Repair'].map(tag => (
                    <span key={tag} className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 cursor-pointer transition-colors">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Author Bio Box */}
            <div className="mt-12 bg-gray-50 p-8 rounded-2xl flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <div className="w-20 h-20 rounded-full bg-brand-200 flex-shrink-0 overflow-hidden">
                <img src="https://picsum.photos/seed/plumberface/200/200" alt="Author" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">About the Author</h4>
                <p className="text-gray-600 mb-4">
                  Senior Master Plumber at Plumbing NYC with over 15 years of field experience in Manhattan high-rises and Brooklyn brownstones. Passionate about preventative maintenance and water conservation.
                </p>
                <a href="#contact" className="text-brand-600 font-semibold text-sm hover:underline">View Team Profile</a>
              </div>
            </div>
            </main>

          {/* Sidebar */}
          <aside ref={sidebarRef} className="lg:col-span-4 space-y-10">
            {/* Search */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Search Blog</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchKey}
                  className="w-full pl-4 pr-12 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                <button
                  onClick={handleSearchClick}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-600 text-white rounded-md hover:bg-brand-700 transition-colors"
                  aria-label="Search"
                >
                  <Search size={16} />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-3">
                {CATEGORIES.filter(cat => cat !== 'All').map((cat, i) => (
                  <li key={i}>
                    <button
                      onClick={() => onNavigate('blog', undefined, undefined, cat)}
                      className="flex items-center justify-between w-full text-gray-600 hover:text-brand-600 transition-colors group"
                    >
                      <span>{cat}</span>
                      <span className="bg-gray-100 text-gray-400 text-xs py-0.5 px-2 rounded-full group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                        {Math.floor(Math.random() * 10) + 1}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-6">Recent Articles</h3>
              <div className="space-y-6">
                {recentPosts.length > 0 ? (
                  [...recentPosts]
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 3)
                    .map(recent => (
                      <button
                        key={recent.id}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate('blog-post', recent);
                        }}
                        className="w-full text-left group hover:bg-gray-50 p-2 -mx-2 rounded-lg transition-colors"
                      >
                        <div className="flex gap-4 items-center">
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                            <img 
                              src={recent.imageUrl || `https://picsum.photos/seed/${recent.id}/200/200`} 
                              alt={recent.title} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `https://picsum.photos/seed/${recent.id}/200/200`;
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-gray-900 line-clamp-2 leading-snug group-hover:text-brand-600 transition-colors">
                              {recent.title}
                            </h4>
                            <p className="text-xs text-gray-400 mt-1">
                              {recent.date || 'No date'}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))
                ) : (
                  <p className="text-gray-500 text-sm">No recent articles found.</p>
                )}
              </div>
            </div>

            {/* Subscribe Box */}
            <div className="bg-brand-900 p-8 rounded-xl text-white text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-500 opacity-20 rounded-full -ml-10 -mb-10"></div>

              <h3 className="text-xl font-bold mb-3 relative z-10">Don't Miss an Update</h3>
              <p className="text-brand-200 text-sm mb-6 relative z-10">Get the latest NYC plumbing tips delivered to your inbox weekly.</p>

              <form className="space-y-3 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your email address" className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none" />
                <button className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 rounded-lg transition-colors shadow-lg">
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-brand-400 mt-4 relative z-10">No spam, unsubscribe anytime.</p>
            </div>

            {/* CTA */}
            <div className="bg-red-50 p-6 rounded-xl border border-red-100 text-center">
              <h3 className="text-brand-accent font-bold mb-2">Plumbing Emergency?</h3>
              <p className="text-sm text-gray-600 mb-4">We are available 24/7 for immediate dispatch.</p>
              <a href="tel:6465807524" className="inline-flex items-center justify-center gap-2 w-full bg-white border-2 border-brand-accent text-brand-accent font-bold py-3 rounded-lg hover:bg-brand-accent hover:text-white transition-all">
                Call 646-580-7524
              </a>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
};