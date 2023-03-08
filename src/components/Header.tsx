import Image from "next/image"
import { DM_Sans, Noto_Sans } from "next/font/google"
import MenuLink from "./MenuLink"
import Button from "./Button"

const DMSans = DM_Sans({ subsets: ['latin'], weight: '700' })
const Links = [
    {
        text: 'Services',
        url: '/'
    },
    {
        text: 'How We Work',
        url: '/'
    },
    {
        text: 'Projects',
        url: '/'
    },
    {
        text: 'About',
        url: '/'
    }
]

export default function Header() {
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
                <Image src="/collosal/Logo.svg" alt="Collosal" width={25} height={25} />
                <h1 className={`${DMSans.className} text-lg`}>Collosal.</h1>
            </div>
            <div className="xl:flex items-center gap-10 sm:hidden">
                {Links.map((link, index) => {
                    return <MenuLink url={link.url} key={index}>{link.text}</MenuLink>
                })}
            </div>
            <div className="flex items-center gap-3">
                <Button className="bg-white bg-opacity-10 drop-shadow-xl rounded-sm xl:inline-block sm:hidden">Contact</Button>
                <Button className="sm:inline-block xl:hidden px-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </Button>
            </div>
        </div>
    )
}
