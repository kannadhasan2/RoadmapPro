import { Upload } from 'lucide-react';
import { useRef } from 'react';

const MAX_DURATION_MINUTES = 5;

function VideoUploader ({ onFileSelect, file }) {
  const inputRef = useRef(null);

  const handleFileChange = (event) => {
    const selected = event.target.files?.[0];
    if (!selected) return;
    if (!selected.type.startsWith('video/')) {
      alert('Only video files are allowed.');
      event.target.value = '';
      return;
    }
    if (selected.size > 500 * 1024 * 1024) {
      alert('Video must be smaller than 500MB.');
      event.target.value = '';
      return;
    }
    onFileSelect(selected);
  };

  return (
    <div className="border border-dashed border-border  p-6 text-center space-y-3 bg-surface">
      <p className="text-textSecondary">
        Upload short-form educational videos ({MAX_DURATION_MINUTES} min limit)
      </p>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="ev-button bg-violet-700 font-bold text-[14px] inline-flex gap-[5px] items-center"
      > <Upload size={20} strokeWidth={3} />
        {file ? 'Replace video' : 'Choose video'}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="video/*"
        className="hidden"
        onChange={handleFileChange}
      />
      {file && (
        <p className="text-xs text-textSecondary">
          Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(1)} MB)
        </p>
      )}
    </div>
  );
}

export default VideoUploader;
