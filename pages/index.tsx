import prisma from "../db/prisma";
import { GetStaticProps, GetStaticPropsResult } from "next";
import { PrismaClient, Post } from "@prisma/client";
import Image from "next/image";

export default function Home({ feed }: HomeProps) {
  return (
    <>
      <h1>Notes</h1>
      <ul>
        {feed.map((post) => (
          <li key={post.id}>
            <Image src={post.file} alt={post.title} width={300} height={200} />
            <div>
              <h2>{post.title}</h2>
              <p>{post.author?.name}</p>
             
            </div>
          </li>
        ))}
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
