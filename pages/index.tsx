import prisma from "../db/prisma";
import { GetStaticProps, GetStaticPropsResult } from "next";
import { PrismaClient, Post } from "@prisma/client";
import Image from "next/image";
import { Upload } from "lucide-react"
import FileGrid from "@/components/file-grid"


export default function Home({ feed }: HomeProps) {
  return (
    <>
      <h1>Notes</h1>
      <ul>
        {feed.map((post) => (
          <li key={post.id}>
            <Image src={post.file ?? "/placeholder.jpg"} alt={post.title} width={300} height={200} />
            <div>
              <h2>{post.title}</h2>
                {/* @ts-ignore */}
              <p>{post.author?.name}</p>
            </div>
          </li>
        ))}
         <section className="items-center gap-6 pb-8 pt-6 md:py-10 flex justify-center p-10">
      <div className="fixed right-0 bottom-0 left-0 p-10 flex justify-center">
      <button className="bg-orange-300 text-orange-700 p-2 items-center text-xl rounded-xl font-bold border-2 flex gap-1.5 border-orange-700 hover:scale-125 transition ease-in-out">
        <Upload/>
       Upload File
        </button>
      </div>
      <FileGrid data={feed}/>
    </section>
      </ul>
    </>
  );

}

interface HomeProps {
  feed: Post[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async (): Promise<GetStaticPropsResult<HomeProps>> => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};
