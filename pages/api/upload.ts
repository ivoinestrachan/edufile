import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import cloudinary from 'cloudinary';
import { Post } from '@prisma/client';
import { getSession } from 'next-auth/react';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export type Media = Omit<Post, 'projectId'>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).send('Method not allowed');
    return;
  }

  const session = await getSession({ req });

  if (!session) {
    res.status(401).send('Unauthorized');
    return;
  }

  let data = await new Promise((resolve, reject) => {
    const form = formidable();

    form.parse(req, (err: any, fields: any, files: any) => {
      if (err) reject({ err });
      resolve({ err, fields, files });
    });
  });

  let { files } = data as any;

  let media: Media[] = [];

  const cloudinaryPromises = [];

  for (const [fileName, file] of Object.entries(files)) {
    const promise = new Promise<void>((resolve) => {
      cloudinary.v2.uploader.upload(
        (file as { path: string }).path,
        (error: any, result: any) => {
          if (!error) {
            media.push({
              //@ts-ignore
              url: result.url,
              mediaType: result.resource_type,
              width: result.width,
              height: result.height,
            });
          }
          resolve();
        }
      );
    });
    cloudinaryPromises.push(promise);
  }

  await Promise.all(cloudinaryPromises);
  res.json(media);
}
