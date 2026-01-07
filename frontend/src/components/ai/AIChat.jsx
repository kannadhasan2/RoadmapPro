import { useState } from 'react';
import api from '../../utils/api.js';
import { MessageCircle, Loader2, Send } from 'lucide-react';

function AIChat({ postId }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);
    
    try {
      const { data } = await api.post(`/posts/${postId}/ai-explain`, { question: userMessage });
      setMessages(prev => [...prev, { role: 'assistant', content: data.answer || 'No response' }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, an error occurred.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0f0f0f] border border-[#1f1f1f] p-5 space-y-4">
      <div className="flex items-center font-bold gap-2 text-[13px] font-semibold text-violet-700">
        <MessageCircle size={17} />
        ASK AI TUTOR
      </div>
      
      {messages.length > 0 && (
        <div className="space-y-3 max-h-48 overflow-y-auto">
          {messages.map((msg, idx) => (
            <div key={idx} className={`text-[12px] ${msg.role === 'user' ? 'text-white' : 'text-[#999]'}`}>
              <span className="text-violet-700 font-bold font-mono text-[13px]">{msg.role === 'user' ? 'YOU' : 'AI'}:</span>
              <p className="mt-1">{msg.content}</p>
            </div>
          ))}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about this video..."
          className="flex-1 bg-[#0a0a0a] border border-[#2a2a2a] px-3 py-2 text-[13px] text-white placeholder:text-[#444] hover:border-violet-700 focus:border-violet-700 focus:outline-none"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="px-3 py-2 bg-violet-700 text-white disabled:opacity-40"
        >
          {loading ? <div className='w-4 h-4 border border-[3px] border-cyan-400 rounded-[5px] animate-spin'></div> : <Send size={16} />}
        </button>
      </form>
    </div>
  );
}

export default AIChat;
