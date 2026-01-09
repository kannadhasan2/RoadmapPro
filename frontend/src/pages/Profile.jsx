import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProfileHeader from '../components/profile/ProfileHeader.jsx';
import ProfilePosts from '../components/profile/ProfilePosts.jsx';
import EditProfile from '../components/profile/EditProfile.jsx';
import api from '../utils/api.js';
import { useAuthStore } from '../store/authStore.js';
import { LayoutDashboard, Route, BookOpen, Loader2 } from 'lucide-react';
import ButtonHeading from '../components/ui/ButtonHeading.jsx';

function Profile() {
  const { id } = useParams();
  const { user } = useAuthStore();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  const isOwnProfile = user?.id === id;

  useEffect(() => {
    const loadProfile = async () => {
      setError(null);
      try {
        const { data } = await api.get(`/users/${id}`);
        setProfile(data.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load profile.');
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, [id]);

  const handleFollowToggle = async () => {
    try {
      if (profile.following) {
        await api.delete(`/users/${id}/follow`);
      } else {
        await api.post(`/users/${id}/follow`);
      }
      setProfile((prev) => ({
        ...prev,
        following: !prev.following,
        followers_count: prev.followers_count + (prev.following ? -1 : 1)
      }));
    } catch {
      // NOOP
    }
  };

  if (loading) {
    return (
      <div className="h-[calc(100vh-120px)] flex items-center justify-center gap-[8px] text-violet-700">
        <div className='w-7 h-7 border border-[3px] border-violet-700 rounded-[5px] animate-spin'></div>
        <p className="text-[17px] font-bold">Loading...</p>
    </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] py-12 px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="bg-red-500/10 border border-red-500/30 p-6 text-center">
            <p className="text-red-400 text-[14px]">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-3 text-[18px] font-bold text-[#FF6B35] hover:underline"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-6 sm:px-6">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 font-bold text-[16px] text-violet-700 mb-4 tracking-[0.15em] font-mono">
            <span className="w-2 h-2 bg-violet-700 rounded-full"></span>
            [ {isOwnProfile ? 'YOUR PROFILE' : 'USER PROFILE'} ]
          </div>
        </div>

        {/* Profile Header */}
        <div className="mb-8">
          <ProfileHeader
            profile={profile}
            isOwnProfile={isOwnProfile}
            onFollowToggle={handleFollowToggle}
          />
        </div>
        
        {/* Quick Actions for Own Profile */}
        {isOwnProfile && (
          <div className="mb-8">
            <ButtonHeading text="QUICK_ACTIONS" className='border-none pl-0 pb-0'/>
            <div className="grid grid-cols-3 gap-4">
              <Link 
                to="/dashboard"
                className="flex items-center gap-3 p-4 bg-[#0f0f0f] border border-[#1f1f1f] hover:border-violet-700 transition-all"
              >
                <LayoutDashboard size={24} className="text-violet-700" />
                <span className="text-[14px] font-semibold text-white">Dashboard</span>
              </Link>
              <Link 
                to="/ai-roadmap"
                className="flex items-center gap-3 p-4 bg-[#0f0f0f] border border-[#1f1f1f] hover:border-violet-700 transition-all"
              >
                <Route size={24} className="text-violet-700" />
                <span className="text-[14px] font-semibold text-white">Roadmaps</span>
              </Link>
              <Link 
                to="/ai-course"
                className="flex items-center gap-3 p-4 bg-[#0f0f0f] border border-[#1f1f1f] hover:border-violet-700 transition-all"
              >
                <BookOpen size={24} className="text-violet-700" />
                <span className="text-[14px] font-semibold text-white">Courses</span>
              </Link>
            </div>
          </div>
        )}
        
        {isOwnProfile && (
          <div className="mb-8">
            <ButtonHeading text="EDIT_PROFILE" className='border-none pl-0 pb-0'/>
            <EditProfile
              profile={profile}
              onUpdated={(nextProfile) => setProfile(nextProfile)}
            />
          </div>
        )}
        
        <div>
          <ButtonHeading text="YOUR_POSTS" className='border-none pl-0 pb-0'/>
          <ProfilePosts posts={profile?.posts} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
