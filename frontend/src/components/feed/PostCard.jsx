import { Link } from 'react-router-dom';
import { Play, Eye, Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { useAuthStore } from '../../store/authStore';

function PostCard({ post, index = 0 }) {
  const {user} = useAuthStore()
  return (
    <div className="group block">
      {/* Thumbnail Container */}
      <Link to={`/posts/${post.id}`} className="relative aspect-video overflow-hidden bg-[#111] block mb-3">
        <img
          src={post.thumbnail || post.thumbnail_url || "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <div className="w-12 h-12 bg-violet-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
            <Play size={20} fill="white" className="text-white ml-1" />
          </div>
        </div>
        
        {/* Duration */}
        {post.duration && (
          <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-[11px] font-mono">
            {typeof post.duration === 'number' 
              ? `${Math.floor(post.duration / 60)}:${String(post.duration % 60).padStart(2, '0')}`
              : post.duration
            }
          </div>
        )}
      </Link>

      {/* Info */}
      <div className="flex gap-3">
        {/* Avatar */}
        <div className="w-9 h-9 bg-violet-700 flex items-center justify-center text-white font-bold text-2sm flex-shrink-0">
          {post.creator?.avatar ? (
            <img src={post.creator.avatar} alt="" className="w-full h-full object-cover" />
          ) : (
            (user?.name || '1').charAt(0).toUpperCase()
          )}
        </div>

        <div className="flex-1 min-w-0">
          <Link to={`/posts/${post.id}`}>
            <h3 className="text-[14px] font-semibold text-white leading-tight line-clamp-2 group-hover:text-violet-700 transition-colors">
              {post.title}
            </h3>
          </Link>
          
          <p className="text-[12px] text-[#666] mt-1">{post.creator?.name || "RoadmapPro Creator"}</p>
          
          <div className="flex items-center gap-3 text-[11px] text-[#555] mt-1">
            <span className="flex items-center gap-1">
              <Eye size={12} /> {post.views_count || 0}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} /> {post.created_at ? formatDistanceToNow(new Date(post.created_at), { addSuffix: true }) : "Just now"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;