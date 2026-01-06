import { useState, useEffect } from "react";
import { usePostStore } from "../store/postStore.js";
import { Play, Clock, Eye, Upload, Video } from "lucide-react";
import { Link } from "react-router-dom";
import ButtonHeading from "../components/ui/ButtonHeading.jsx";

function Videos() {
  const { posts, fetchFeed, loading, error } = usePostStore();
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchFeed(true);
  }, []);

  if (loading && posts.length === 0 ) {
    return (
      <div className="h-[calc(100vh-120px)] bg-[#0a0a0a] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-violet-700  rounded-[5px] animate-spin"></div>
          <p className=" text-[12px] font-bold lg:text-[14px] font-mono text-violet-700">LOADING_VIDEOS...</p>
        </div>
      </div>
    );
  }

  if (!error ) {
    return (
      <div className="h-[calc(100vh-180px)] bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center p-8 border border-violet-700 bg-violet-700/10">
          <p className="text-[red] font-bold mb-4">{error}</p>
          <button 
            onClick={() => fetchFeed(true)}
            className="px-4 py-2 bg-violet-700 text-white font-bold text-sm hover:bg-violet-500 transition-colors"
          >
            RETRY_CONNECTION
          </button>
        </div>
      </div>
    );
  }

  const safePosts = Array.isArray(posts) ? posts : [];
  const categories = ["All", ...new Set(safePosts.map(p => p.subject).filter(Boolean))];
  const filteredPosts = selectedCategory === "All" 
    ? safePosts 
    : safePosts.filter(p => p.subject === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-8 px-6">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 font-bold text-[14px] text-violet-700 mb-4 tracking-[0.15em] font-mono">
            <span className="w-2 h-2 bg-violet-700 rounded-full"></span>
            [ LEARNING VIDEOS ]
          </div>
          <h1 className="text-[48px] font-bold text-white mb-4 leading-tight">
                {"Learning Videos".split("").map((char, i) => (
                  <span
                    key={i}
                    className="transition-colors duration-300"
                    style={{
                      animation: `violetWave 1.2s ease forwards infinite`,
                      animationDelay: `${i * 80}ms`,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
            </h1>
          <p className="text-[#666] text-[16px] max-w-xl">
            Explore deep-dive educational content curated by our community of experts
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-10">
          <h2 className="text-[14px] font-mono text-violet-700 font-bold mb-4 tracking-wide">&gt;_ CATEGORIES</h2>
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-[13px] font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-violet-700 text-white"
                    : "bg-[#111] border border-[#2a2a2a] text-[#999] hover:border-violet-700 hover:font-bold hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Videos Grid */}
        <div className="mb-10">
          <ButtonHeading text="VIDEO LIBRARY" className="border-none pl-0 pb-0 " />
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-[#0f0f0f] border border-[#1f1f1f]">
              <Video size={48} className="text-violet-700 mx-auto mb-4" />
              <p className="text-white-700 text-[14px]">No videos found in this category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredPosts.map((post) => (
                <Link 
                  key={post.id} 
                  to={`/posts/${post.id}`} 
                  className="group block"
                >
                  <div className="bg-[#0f0f0f] border border-[#1f1f1f] hover:border-[#333] transition-all overflow-hidden">
                    {/* Thumbnail */}
                    <div className="relative aspect-video bg-[#111] overflow-hidden">
                      <img 
                        src={post.thumbnail_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <div className="w-12 h-12 bg-[#FF6B35] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                          <Play size={20} fill="black" className="text-black ml-1" />
                        </div>
                      </div>
                      {post.duration && (
                        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-[11px] font-mono">
                          {Math.floor(post.duration / 60)}:{String(post.duration % 60).padStart(2, '0')}
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-white text-[14px] line-clamp-2 mb-2 group-hover:text-[#FF6B35] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-[12px] text-[#555] mb-3">{post.creator_name || "Unknown Creator"}</p>
                      
                      <div className="flex items-center gap-4 text-[11px] text-[#444] pt-3 border-t border-[#1f1f1f]">
                        {post.views && (
                          <span className="flex items-center gap-1">
                            <Eye size={12} /> {post.views.toLocaleString()}
                          </span>
                        )}
                        {post.created_at && (
                          <span className="flex items-center gap-1">
                            <Clock size={12} /> {new Date(post.created_at).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Floating Upload Button */}
      <Link
        to="/upload"
        className="fixed bottom-8 right-8 flex items-center gap-2 px-5 py-3 bg-violet-700 hover:bg-violet-500 text-white font-bold text-[13px] transition-all z-50"
      >
        <Upload size={18} strokeWidth={3} />
        UPLOAD VIDEO
      </Link>
    </div>
  );
}

export default Videos;
