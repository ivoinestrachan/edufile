import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

const UploadFile = () => {
  const [file, setFile] = useState<File | undefined | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [title, setTitle] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]; 
    setFile(selectedFile || null);
    setPreview(selectedFile ? URL.createObjectURL(selectedFile) : null);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = () => {
   
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
        {preview && <Image src={preview} alt="Preview" className="mt-2" width={200} height={200} />}
      </div>
      <div>
        <Button onClick={handleSubmit}>Post</Button>
      </div>
    </div>
  );
};

export default UploadFile;
