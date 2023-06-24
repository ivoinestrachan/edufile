import React, { useState, useRef } from "react";
import Image from "next/image";

type Props = {
  data: FileItem[];
};

interface FileItem {
  id: string;
  file: string | null;
  title: string;
  author?: User | null;
  authorId?: string | null;
  date?: string;
}

interface User {
  id: string;
  name: string;
}

export default function FileGrid({ data }: Props) {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const overlayRef = useRef(null);

  const handleImageClick = (fileId: string) => {
    setExpandedImage(fileId);
  };

  const handleCloseClick = () => {
    setExpandedImage(null);
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === overlayRef.current) {
      setExpandedImage(null);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-wrap gap-5">
        {data.map((item: FileItem) => (
          <div
            key={item.id}
            className="flex flex-col w-48 bg-slate-100 rounded-lg overflow-hidden border-4 hover:scale-105 transition ease-in-out"
          >
            <div
              className={`h-52 relative cursor-pointer ${
                expandedImage === item.id ? "z-50" : ""
              }`}
              onClick={() => handleImageClick(item.id)}
            >
              <Image
                className="h-full w-full object-cover"
                src={item.file ?? "/placeholder.jpg"}
                alt="Picture of the author"
                layout="fill"
              />
            </div>
            <div className="p-3">
              <div className="font-semibold text-black">{item.title}</div>
              <div className="flex gap-1 text-xs font-medium text-black items-center">
                {item.author ? (
                  <span>{item.author.name}</span>
                ) : (
                  <span>Unknown Author</span>
                )}
                <div>
                  <span className="text-gray-500 text-sm">·</span>
                </div>
                <span className="text-gray-500">{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {expandedImage && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleOverlayClick}
        >
          <div className="relative max-w-full max-h-full">
            <img
              className="object-contain"
              src={data.find((item) => item.id === expandedImage)?.file ?? "/placeholder.jpg"}
              alt="Expanded Image"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
              onClick={handleCloseClick}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
