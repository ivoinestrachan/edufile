import prisma from "../db/prisma";
import { GetStaticProps, GetStaticPropsResult } from "next";
import { Post } from "@prisma/client";
import { Upload } from "lucide-react";
import FileGrid from "@/components/file-grid";
import SearchBar from "@/components/search";
import { useState } from 'react';
import UploadFile from "@/components/UploadFile";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home({ feed }: HomeProps) {
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    if (session) {
      setShowModal(true);
    } else {
      toast.error('Please log in to upload a file.');
      console.log('Upload button clicked - User not logged in');
    }
  };

  return (
    <>
      <ToastContainer />
      {showModal && <UploadFile onClose={() => setShowModal(false)} />}
      <section className="items-center gap-6 pb-8 pt-6 md:py-10 flex flex-col justify-center p-10">
        <SearchBar />
        <div className="fixed z-50 right-0 bottom-0 left-0 p-10 flex justify-center">
          <button
            className="bg-orange-300 text-orange-700 p-2 items-center text-xl rounded-xl font-bold border-2 flex gap-1.5 border-orange-700 hover:scale-125 transition ease-in-out cursor-pointer"
            onClick={handleButtonClick}
           
          >
            <Upload />
            Upload File
          </button>
        </div>
        {/* // @ts-ignore */}
        <FileGrid data={feed} />
      </section>
      <ToastContainer />
    </>
  );
}

interface HomeProps {
  feed: Post[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async (): Promise<
  GetStaticPropsResult<HomeProps>
> => {
  const feed = await prisma.post.findMany({
    where: { published: true },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};
