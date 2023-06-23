// import { MoreVertical } from "lucide-react"

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

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-wrap gap-5">
          {data.map((item) => (
            <div className="flex flex-col w-48 bg-slate-100 rounded-lg overflow-hidden border-4 hover:scale-105 delay-200 transition ease-in-out">
              <div className="h-52 relative">
                <img
                  className="absolute h-full w-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2CG1tEZrcR8Rx4LbX0gxX5QimvSe3aSJmUVubtd8rLNF4cowXm1fOcoY0UTOjgOU1kM&usqp=CAU"
                  alt="Picture of the author"
                />
                <div className="absolute p-2 text-xs text-orange-700 font-bold">
                  <div className="bg-orange-300 rounded-xl px-1.5 left-0">
                    {item.course}
                  </div>
                </div>
                {/* <button className="absolute p-2 text-xs right-0 text-black">
              <MoreVertical/>
            </button> */}
              </div>
              <div className="p-3">
                <div className="font-semibold text-black">{item.title}</div>
                <div className="flex gap-1 text-xs font-medium text-black items-center">
                  {item.user}
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
    </section>
  )
}
