// @ts-nocheck
import React from "react"

type Props = {
  data: File[]
}

interface File {
  id: string;
  file: string | null;
  title: string;
  author?: string;
  authorId?: string | undefined;
  date?: string;
}

export default function FileGrid({ data }: Props) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-wrap gap-5">
        {data.map((item: File) => (
          <div className="flex flex-col w-48 bg-slate-100 rounded-lg overflow-hidden border-4 hover:scale-105 transition ease-in-out">
            <div className="h-52 relative">
              <img
                className="absolute h-full w-full"
                src={item.file ?? "/placeholder.jpg"}
                alt="Picture of the author"
              />
              <div className="absolute p-2 text-xs text-orange-700 font-bold">
                <div className="bg-orange-300 rounded-xl px-1.5 left-0">
                  Math 2700
                </div>
              </div>
              {/* <button className="absolute p-2 text-xs right-0 text-black">
              <MoreVertical/>
            </button> */}
            </div>
            <div className="p-3">
              <div className="font-semibold text-black">{item.title}</div>
              <div className="flex gap-1 text-xs font-medium text-black items-center">
                {/* @ts-ignore */}
                {item.author?.name}
                <div>
                  <span className="text-gray-500 text-sm">·</span>
                </div>
                <span className="text-gray-500">{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
