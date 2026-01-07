import { Loader2 } from 'lucide-react';

function Loader ({ label = 'Loading...' }) {
  return (
    <div className="h-[calc(100vh-120px)] flex items-center justify-center gap-[8px] text-violet-700">
      <div className='w-7 h-7 border border-[3px] border-violet-700 rounded-[5px] animate-spin'></div>
      <p className="text-[17px] font-bold">{label}</p>
    </div>
  );
}

export default Loader;
