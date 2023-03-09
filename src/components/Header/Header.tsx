import Image from "next/image"
import { DM_Sans } from "next/font/google"
import MenuLink from "./MenuLink"
import Button from "./Button"
import { useContext } from "react"
import Sidebar from "../Sidebar"
import { AppContext } from "@/utils/context"

const DMSans = DM_Sans({ subsets: ['latin'], weight: '700' })
interface Props {
    Links: {
        url: string,
        text: string
    }[]
}

export default function Header({ Links }: Props) {
    const context = useContext(AppContext)
    
    function openSidebar() {
        context.isOpen = true
    }

    return (
        <>
            <Sidebar Links={Links} />
            <div className="flex justify-between items-center xl:px-0 min-[300px]:px-6">
                <div className="flex gap-4 items-center">
                    <Image src="/collosal/Logo.svg" alt="Collosal" width={25} height={25} />
                    <h1 className={`${DMSans.className} text-lg`}>Collosal.</h1>
                </div>
                <div className="xl:flex items-center gap-10 min-[300px]:hidden">
                    {Links.map((link, index) => {
                        return <MenuLink url={link.url} key={index}>{link.text}</MenuLink>
                    })}
                </div>
                <div className="flex items-center gap-3">
                    <Button className="bg-white bg-opacity-10 drop-shadow-xl rounded-sm xl:inline-block min-[300px]:hidden">Contact</Button>
                    <Button className="sm:inline-block xl:hidden min-[300px]:px-0" onClick={() => openSidebar()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </Button>
                </div>
            </div>
        </>
    )
}
