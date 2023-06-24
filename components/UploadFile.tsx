import React from 'react';

const UploadFile = ({ onClose }: { onClose: () => void }) => {
  return (
    <div>
      <div>
        <input placeholder="title" />
      </div>
      <div>
        <input type="file" />
      </div>
      <div>
        <button>Post</button>
      </div>
      <button onClick={onClose} className="text-[24px] font-bold">
        X
      </button>
    </div>
  );
};

export default UploadFile;
