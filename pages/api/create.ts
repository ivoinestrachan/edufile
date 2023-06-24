import prisma from "../../db/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).send("Method not allowed");
    return;
  }

  const session = await getSession({ req });

  if (!session || !session.user) {
    res.status(401).send("Unauthorized");
    return;
  }

  if (
    !req.body?.title ||
    !req.body?.file ||
    !req.body?.files
  ) {
    res.status(400).send("Missing required fields");
    return;
  }

  if (req.body.files.length === 0) {
    res.status(400).send("Files must not be empty");
    return;
  }

  const { title, file, files } = req.body;

  try {
    await prisma.post.create({
      data: {
        title,
        file,
        // @ts-ignore
        files: {
          create: files.map((file: any) => ({
            url: file.url,
            mediaType: file.mediaType,
            width: file.width,
            height: file.height,
          })),
        },
      },
    });
  } catch (e) {
    console.log(e);
    res.status(400).send(`Error creating post: ${e}`);
    return;
  }

  res.end();
}
