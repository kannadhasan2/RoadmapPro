import { Loader2 } from 'lucide-react';

function Loader ({ label = 'Loading...' }) {
  return (
    <div className="flex items-center gap-3 text-violet-700">
      <Loader2 size={16} className="text-violet-700 animate-spin" />
      <p className="text-[13px] font-bold">{label}</p>
    </div>
  );
}

export default Loader;
