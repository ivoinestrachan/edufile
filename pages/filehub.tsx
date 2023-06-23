// import { MoreVertical } from "lucide-react"

import { Upload } from "lucide-react"
import FileGrid from "@/components/file-grid"

const data = [
  {
    title: "Example_PDF.pdf",
    user: "John Doe",
    date: "May 12",
    course: "Math 2700",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2CG1tEZrcR8Rx4LbX0gxX5QimvSe3aSJmUVubtd8rLNF4cowXm1fOcoY0UTOjgOU1kM&usqp=CAU",
  },
  {
    title: "MathPD.pdf",
    user: "Matt Doe",
    date: "May 12",
    course: "Math 2700",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2CG1tEZrcR8Rx4LbX0gxX5QimvSe3aSJmUVubtd8rLNF4cowXm1fOcoY0UTOjgOU1kM&usqp=CAU",
  },
  {
    title: "Example_PDF.pdf",
    user: "John Doe",
    date: "May 12",
    course: "Math 2700",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2CG1tEZrcR8Rx4LbX0gxX5QimvSe3aSJmUVubtd8rLNF4cowXm1fOcoY0UTOjgOU1kM&usqp=CAU",
  },
  {
    title: "MathPD.pdf",
    user: "Matt Doe",
    date: "May 12",
    course: "Math 2100",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2CG1tEZrcR8Rx4LbX0gxX5QimvSe3aSJmUVubtd8rLNF4cowXm1fOcoY0UTOjgOU1kM&usqp=CAU",
  },
  {
    title: "Example_PDF.pdf",
    user: "John Doe",
    date: "May 12",
    course: "CSP 2700",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2CG1tEZrcR8Rx4LbX0gxX5QimvSe3aSJmUVubtd8rLNF4cowXm1fOcoY0UTOjgOU1kM&usqp=CAU",
  },
  {
    title: "MathPD.pdf",
    user: "Matt Doe",
    date: "May 12",
    course: "CS 2700",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2CG1tEZrcR8Rx4LbX0gxX5QimvSe3aSJmUVubtd8rLNF4cowXm1fOcoY0UTOjgOU1kM&usqp=CAU",
  },
]

export default function FileHub() {
  return (
    <section className="items-center gap-6 pb-8 pt-6 md:py-10 flex justify-center p-10">
      <div className="fixed right-0 bottom-0 left-0 p-10 flex justify-center">
      <button className="bg-orange-300 text-orange-700 p-2 items-center text-xl rounded-xl font-bold border-2 flex gap-1.5 border-orange-700 hover:scale-125 transition ease-in-out">
        <Upload/>
       Upload File
        </button>
      </div>
      {/* <FileGrid data={data}/> */}
    </section>
  )
}
