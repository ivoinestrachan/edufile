import React from 'react';

const UploadFile = () => {
  return (
    <div>
      <div>
        <input className='text-black' placeholder="title" />
      </div>
      <div>
        <input type="file" />
      </div>
      <div>
        <button>Post</button>
      </div>
    </div>
  );
};

export default UploadFile;
