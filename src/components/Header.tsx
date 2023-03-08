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
        <div className={`flex items-center gap-10`}>
            {Links.map((link, index) => {
                return <MenuLink url={link.url} key={index}>{link.text}</MenuLink>
            })}
        </div>
        <Button text="Contact" className="bg-white bg-opacity-10 drop-shadow-xl"/>
    </div>
  )
}
