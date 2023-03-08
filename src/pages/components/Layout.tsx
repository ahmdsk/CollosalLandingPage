import { Noto_Sans } from "next/font/google"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const NotoSans = Noto_Sans({
    subsets: ['latin'],
    weight: "400"
})

export default function Layout({ children }: Props) {
    return (
        <div className={`${NotoSans.className} container mx-auto px-48 text-white`}>{children}</div>
    )
}
