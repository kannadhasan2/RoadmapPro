import { useState } from 'react';
import api from '../../utils/api.js';
import { Loader2 } from 'lucide-react';

function EditProfile ({ profile, onUpdated }) {
  const [form, setForm] = useState({
    name: profile?.name || '',
    bio: profile?.bio || '',
    interests: profile?.interests?.join(', ') || ''
  });
  const [status, setStatus] = useState(null);
  const [saving, setSaving] = useState(false);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setStatus(null);
    try {
      const { data } = await api.put(`/users/${profile.id}`, {
        ...form,
        interests: form.interests.split(',').map((tag) => tag.trim()).filter(Boolean)
      });
      onUpdated(data);
      setStatus('saved');
    } catch (error) {
      setStatus(error.response?.data?.message || 'Failed to update profile.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#0f0f0f] border border-[#1f1f1f] p-6 space-y-4">
      <div>
        <label className="block text-[13px] text-violet-700 font-bold uppercase tracking-[0.15em]  mb-2 font-mono">NAME</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full bg-[#0a0a0a] border border-[#2a2a2a] hover:border-violet-700 px-4 py-3 text-white text-[14px] placeholder:text-[#444] focus:outline-none focus:border-violet-700"
        />
      </div>
      
      <div>
        <label className="block text-[13px] text-violet-700 font-bold  uppercase tracking-[0.15em]  mb-2 font-mono">BIO</label>
        <textarea
          name="bio"
          value={form.bio}
          onChange={handleChange}
          rows={3}
          className="w-full bg-[#0a0a0a] border border-[#2a2a2a] hover:border-violet-700 px-4 py-3 text-white text-[14px] placeholder:text-[#444] focus:outline-none focus:border-violet-700 resize-none"
        />
      </div>
      
      <div>
        <label className="block text-[13px] text-violet-700 font-bold uppercase tracking-[0.15em]  mb-2 font-mono">INTERESTS (COMMA SEPARATED)</label>
        <input
          type="text"
          name="interests"
          value={form.interests}
          onChange={handleChange}
          placeholder="React, Python, AI..."
          className="w-full bg-[#0a0a0a] border border-[#2a2a2a] px-4 hover:border-violet-700 py-3 text-white text-[14px] placeholder:text-[#444] focus:outline-none focus:border-violet-700"
        />
      </div>
      
      {status && status !== 'saved' && (
        <p className="text-red-400 text-[13px]">{status}</p>
      )}
      {status === 'saved' && (
        <p className="text-green-400 text-[13px]">Profile saved successfully!</p>
      )}
      
      <button 
        type="submit"
        disabled={saving}
        className="px-5 py-3 bg-violet-700 hover:bg-violet-500 disabled:opacity-40 text-white font-bold text-[14px] flex items-center gap-2 transition-all"
      >
        {saving ? <><Loader2 size={16} className="animate-spin" /> SAVING...</> : 'SAVE CHANGES'}
      </button>
    </form>
  );
}

export default EditProfile;
