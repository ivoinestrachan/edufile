import prisma from "@/db/prisma";
import { GetStaticProps } from "next/types";

export default function Home() {
  return <>hi</>;
}

export const getStaticProps: GetStaticProps = async () => {
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
