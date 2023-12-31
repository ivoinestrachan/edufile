import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

const UploadFile = () => {
  const [file, setFile] = useState<File | undefined | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const { data: session } = useSession();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setFile(selectedFile || null);
    setPreview(selectedFile ? URL.createObjectURL(selectedFile) : null);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = () => {
    if (!session || !session.user) {
      console.error('Unauthorized');
      return;
    }
  
    if (file) {
      const requestData = {
        file,
        title,
      };
  
      console.log('Submitting form data:', requestData);
  
      fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Upload successful:', data);
        })
        .catch((error) => {
          console.error('Upload failed:', error);
        });
    }
  };
  

  return (
    <div className="flex flex-col gap-5">
      <div>
        <Input
          className="text-black"
          placeholder="Title of post..."
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <input type="file" onChange={handleFileChange} />
        {preview && (
          <Image src={preview} alt="Preview" className="mt-2" width={200} height={200} />
        )}
      </div>
      <div>
        <Button onClick={handleSubmit}>Upload</Button>
      </div>
    </div>
  );
};

export default UploadFile;
