import React, { useState, useEffect } from 'react';
import { Search, Calendar, User, ArrowRight, Tag, Filter } from 'lucide-react';
import { BlogPost, PageView } from '../types';

// Exporting constants so they can be reused in App.tsx or Template
export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '8 Critical Winter Plumbing Tips for NYC Homes',
    excerpt: 'Frozen pipes and low pressure can cause havoc in winter. Learn the essential prevention steps specifically for New York City infrastructure.',
    category: 'Seasonal',
    author: 'Admin',
    date: 'Dec 4, 2025',
    imageUrl: 'https://picsum.photos/seed/winterplumbing/800/600',
    slug: 'winter-plumbing-tips-nyc',
    content: `
      <h2>Why NYC Winters Are Tough on Pipes</h2>
      <p>New York City's infrastructure is a mix of the modern and the historic. Brownstones in Brooklyn often have pipes that are decades old, while high-rises in Manhattan face issues with pressure drops during freezing temperatures. When the mercury drops below 32°F, water inside your pipes can freeze, expand, and cause bursts that lead to thousands of dollars in water damage.</p>
      
      <h3>1. Insulate Exposed Pipes</h3>
      <p>The first line of defense is insulation. Check unheated areas like basements, crawl spaces, and garages. Use foam pipe insulation sleeves—they are inexpensive and easy to install.</p>
      
      <h3>2. Keep the Heat On</h3>
      <p>Even if you are leaving for a winter vacation, do not turn the heat off completely. Keep the thermostat set to at least 55°F to ensure the ambient temperature keeps pipes warm enough to prevent freezing.</p>
      
      <blockquote>"A consistent temperature is key. Fluctuations can cause pipes to contract and expand, weakening joints over time." - Senior Technician, Plumbing NYC</blockquote>

      <h3>3. Drip Faucets During Extreme Cold</h3>
      <p>Moving water is less likely to freeze. If a deep freeze is forecast, allow a trickle of cold water to drip from the faucet served by exposed pipes.</p>

      <ul>
         <li><strong>Disconnect Garden Hoses:</strong> Water left in hoses can back up and freeze into the pipe.</li>
         <li><strong>Seal Drafts:</strong> Check for cold air leaks near plumbing and seal them with caulk.</li>
         <li><strong>Know Your Main Shut-off:</strong> In case of a burst, you need to cut the water fast.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Winter proofing is an investment in peace of mind. If you are unsure about the state of your pipes, call us for a pre-winter inspection.</p>
    `
  },
  {
    id: '2',
    title: 'NYC Kitchen & Bath Renovations: The Expert Guide',
    excerpt: 'Planning an upgrade? Discover essential plumbing renovation tips for pre-war buildings and modern apartments alike.',
    category: 'Renovation',
    author: 'Admin',
    date: 'Oct 8, 2025',
    imageUrl: 'https://picsum.photos/seed/renovation/800/600',
    slug: 'nyc-plumbing-renovations',
    content: `
      <h2>Renovating in the Concrete Jungle</h2>
      <p>Renovating a kitchen or bathroom in NYC is unlike anywhere else. You have co-op boards, strict city codes, and the challenge of navigating vertical plumbing stacks shared by dozens of neighbors.</p>
      
      <h3>Permits are Non-Negotiable</h3>
      <p>Before you move a sink or add a shower, know that almost all plumbing work in NYC requires a permit filed by a Licensed Master Plumber (LMP). Skipping this step can lead to hefty fines and issues when selling your property.</p>

      <h3>Common Challenges in Pre-War Buildings</h3>
      <p>Pre-war buildings are beautiful but their plumbing is often made of galvanized steel or brass that is nearing the end of its life.</p>
      <ul>
        <li><strong>Galvanized Pipes:</strong> These rust from the inside out, restricting water flow.</li>
        <li><strong>Lead Bends:</strong> Older toilets often connect to the stack via lead pipes which must be replaced.</li>
        <li><strong>Branch Lines:</strong> Replacing the lines to the main stack is usually the homeowner's responsibility.</li>
      </ul>

      <img src="https://picsum.photos/seed/plumbingpipes/800/400" alt="Old Pipes vs New" class="rounded-xl my-8 w-full object-cover" />

      <h3>Planning Your Layout</h3>
      <p>Moving a toilet or shower more than a few feet can be incredibly expensive because it requires changing the pitch of the drain pipe, which may not be possible within the floor joists.</p>
    `
  },
  {
    id: '3',
    title: '2025 NYC Plumbing Cost Guide: Budgeting for Repairs',
    excerpt: 'From service calls ($75-$200) to hourly rates, we break down exactly what you should expect to pay for plumbing in the city this year.',
    category: 'Cost Guide',
    author: 'Admin',
    date: 'Jun 11, 2025',
    imageUrl: 'https://picsum.photos/seed/costguide/800/600',
    slug: 'nyc-plumbing-cost-guide-2025',
    content: `
      <h2>Understanding Plumbing Rates in 2025</h2>
      <p>Transparency is rare in this industry, but we believe you should know what you are paying for. NYC rates are higher than the national average due to insurance costs, traffic/travel time, and the complexity of city infrastructure.</p>
      
      <h3>Standard Rates Breakdown</h3>
      <p><strong>Service Call / Diagnostic Fee:</strong> $75 - $150. (Often waived if work is performed).</p>
      <p><strong>Hourly Labor:</strong> $150 - $225 per hour for a Licensed Master Plumber.</p>
      
      <h3>Common Flat-Rate Jobs</h3>
      <ul>
        <li><strong>Faucet Installation:</strong> $250 - $450 + parts</li>
        <li><strong>Toilet Installation:</strong> $300 - $600</li>
        <li><strong>Water Heater Replacement:</strong> $1,800 - $3,500 (depending on tank size and venting)</li>
        <li><strong>Drain Cleaning (Snaking):</strong> $150 - $350</li>
      </ul>
      
      <h3>Emergency vs Scheduled</h3>
      <p>Emergency calls after hours or on weekends typically incur a "time-and-a-half" or double-time rate. However, at Plumbing NYC, we strive to keep our emergency premiums reasonable.</p>
    `
  },
  {
    id: '4',
    title: 'How to Install a Double Kitchen Sink: A Step-by-Step Guide',
    excerpt: 'Upgrade your kitchen efficiency. A functional double sink setup requires precise plumbing. Here is how to handle the installation.',
    category: 'DIY Guides',
    author: 'Admin',
    date: 'Mar 8, 2025',
    imageUrl: 'https://picsum.photos/seed/kitchensink/800/600',
    slug: 'install-double-kitchen-sink'
  },
  {
    id: '5',
    title: '6 Essential Kitchen Plumbing Maintenance Tips',
    excerpt: 'New York City\'s old pipes can be temperamental. Keeping your kitchen drains flowing freely is crucial for a healthy home.',
    category: 'Maintenance',
    author: 'Admin',
    date: 'Feb 6, 2025',
    imageUrl: 'https://picsum.photos/seed/maintenance/800/600',
    slug: 'kitchen-plumbing-tips'
  },
  {
    id: '6',
    title: 'Plumbing Emergency Handbook: 4 Steps to Take Immediately',
    excerpt: 'When water is everywhere, panic sets in. Follow these 4 urgent steps to mitigate damage while our emergency team is on the way.',
    category: 'Emergency',
    author: 'Admin',
    date: 'Sep 12, 2024',
    imageUrl: 'https://picsum.photos/seed/emergency/800/600',
    slug: 'plumbing-emergency-steps'
  },
  {
    id: '7',
    title: 'Homeowner\'s Guide: 6 Plumbing Basics You Must Know',
    excerpt: 'Understanding your home\'s system is the first line of defense. Here is the general knowledge every NYC homeowner needs.',
    category: 'Education',
    author: 'Admin',
    date: 'Aug 11, 2024',
    imageUrl: 'https://picsum.photos/seed/basics/800/600',
    slug: 'plumbing-basics-homeowners'
  },
  {
    id: '8',
    title: 'DIY Sump Pump Installation: Keep Your Basement Dry',
    excerpt: 'Tired of a damp basement? Learn the expert steps to installing a sump pump and protecting your property from flooding.',
    category: 'DIY Guides',
    author: 'Admin',
    date: 'Jul 17, 2024',
    imageUrl: 'https://picsum.photos/seed/sumppump/800/600',
    slug: 'diy-sump-pump-installation'
  },
  {
    id: '9',
    title: 'The Ultimate Guide to Hydro Jetting Services',
    excerpt: 'Dealing with frequent clogs? Hydro jetting is a potent solution for sluggish drains. Learn how high-pressure cleaning works.',
    category: 'Services',
    author: 'Admin',
    date: 'Mar 6, 2024',
    imageUrl: 'https://picsum.photos/seed/hydrojetting/800/600',
    slug: 'guide-to-hydro-jetting'
  }
];

export const CATEGORIES = ['All', 'Emergency', 'Renovation', 'Cost Guide', 'DIY Guides', 'Maintenance', 'Seasonal', 'Services', 'Education'];

interface BlogPageProps {
  onNavigate?: (page: PageView, post?: BlogPost) => void;
  initialSearchTerm?: string;
  initialCategory?: string;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, initialSearchTerm, initialCategory }) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm || '');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'All');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  // Update searchTerm if provided from parent
  useEffect(() => {
    if (initialSearchTerm !== undefined) {
      setSearchTerm(initialSearchTerm);
    }
  }, [initialSearchTerm]);

  // Update selectedCategory if provided from parent
  useEffect(() => {
    if (initialCategory !== undefined) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  // Filter and Sort Logic
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  // Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePostClick = (post: BlogPost) => {
    if (onNavigate) {
      onNavigate('blog-post', post);
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 animate-fade-in">
      
      {/* Hero Section */}
      <section className="bg-brand-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Expert Plumbing <span className="text-brand-500">Insights</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Tips, guides, and industry news to help NYC homeowners protect their property and make informed decisions.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-[70px] z-30 bg-white border-b border-gray-200 shadow-sm py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Categories (Desktop) - Wrapped for visibility */}
            <div className="hidden md:flex flex-wrap gap-2 items-center flex-1">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap
                    ${selectedCategory === cat 
                      ? 'bg-brand-600 text-white shadow-md' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Mobile Category Select */}
            <div className="md:hidden w-full">
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 bg-white"
              >
                {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>

            {/* Search & Sort */}
            <div className="flex w-full md:w-auto gap-3">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none"
                />
              </div>
              <select 
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest')}
                className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-brand-500 outline-none cursor-pointer"
              >
                <option value="newest">Latest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>

          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <article 
                key={post.id} 
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full transform hover:-translate-y-1 cursor-pointer"
                onClick={() => handlePostClick(post)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handlePostClick(post);
                  }
                }}
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-600 uppercase tracking-wide flex items-center gap-1 shadow-sm">
                    <Tag size={12} />
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Meta Data */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Footer/CTA */}
                  <div className="mt-auto pt-4 border-t border-gray-50">
                    <button 
                      className="text-brand-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                      // No explicit onClick needed here as it propagates to article
                    >
                      Read Article <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-block p-4 rounded-full bg-gray-100 text-gray-400 mb-4">
              <Filter size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
              className="mt-4 text-brand-600 hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Functional Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center gap-2 items-center">
            {/* Previous Button */}
            <button 
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-lg bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 flex items-center justify-center font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                aria-label="Previous Page"
            >
                <ArrowRight size={16} className="rotate-180" />
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                    key={number}
                    onClick={() => handlePageChange(number)}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-all duration-200 ${
                        currentPage === number
                            ? 'bg-brand-600 text-white shadow-md transform scale-105'
                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 font-medium'
                    }`}
                >
                    {number}
                </button>
            ))}

             {/* Next Button */}
            <button 
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-lg bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 flex items-center justify-center font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                aria-label="Next Page"
            >
                <ArrowRight size={16} />
            </button>
          </div>
        )}
      </section>

      {/* Newsletter / Footer CTA */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">Get the latest plumbing tips and seasonal guides delivered to your inbox.</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none"
            />
            <button className="bg-brand-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};