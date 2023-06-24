import React from 'react';
import { Input } from "@/components/ui/input"
import { Button } from './ui/button';

const UploadFile = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div>
        <Input className='text-black' placeholder="Title of post..." />
      </div>
      <div>
      <Input type="file"/>
      </div>
      <div>
        <Button>Post</Button>
      </div>
    </div>
  );
};

export default UploadFile;
