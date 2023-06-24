import React from "react";
import { CommandMenu } from "./ui/search-filter";

type Props = {};

const topics = [
  "Math",
  "Science",
  "English",
  "History",
  "Computer Science",
  "Business",
  "Economics",
];

export default function SearchBar({}: Props) {
  return (
    <div className="flex flex-col gap-7 items-center py-10">
      <div className="text-5xl font-bold tracking-tigher">
        Welcome to EduFile
      </div>
      <div className="text-xl">Sharing is caring 😃</div>
      <CommandMenu />
      <div className="flex flex-wrap w-full bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 rounded-md p-10 border-2 border-orange-600">
        <div className="p-2 backdrop-blur-lg flex flex-wrap">
        {topics.map((topic, i) => (
          <button key={i} className="bg-white hover:scale-105 hover:-translate-y-1 transition ease-in-out text-black rounded-md p-2 m-2 text-lg font-semibold shadow-md border-2 border-orange-600">
            {topic}
          </button>
        ))}
        </div>
      </div>
    </div>
  );
}
