import prisma from "@/db/prisma";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

interface PostProps {
  [key: string]: any;
}

export const getServerSideProps: GetServerSideProps<PostProps> = async ({
  params,
}: GetServerSidePropsContext<ParsedUrlQuery>) => {
  const postId = String(params?.id);
  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};
