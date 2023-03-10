import { AppContext } from "@/utils/context"
import Link from "next/link"
import { useContext } from "react"
import Button from "./Header/Button"

interface Props {
  Links: {
    url: string,
    text: string
  }[],
}

export default function Sidebar({ Links }: Props) {
  const context = useContext(AppContext)
  function closeSidebar() {
    context.isOpen = false
  }

  const closeWrapper = context.isOpen ? 'sm:w-1/2 min-[300px]:w-2/3' : '-translate-x-[400px]'

  return (
    <div className={`fixed top-0 left-0 bg-[#0B0B22] min-h-screen p-8 ${closeWrapper} transition-all ease-in-out duration-200`}>
      <Button className="flex justify-end mb-12 min-[300px]:px-0" onClick={() => closeSidebar()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </Button>
      {Links.map((link, index) => {
        return <Link href={link.url ?? '#'} key={index} className="font-bold text-lg text-white text-opacity-70 block mb-8 hover:translate-x-6 transition-all ease-out duration-300">{link.text}</Link>
      })}
    </div>
  )
}
