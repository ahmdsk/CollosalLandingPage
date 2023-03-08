import { Noto_Sans } from "next/font/google"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const NotoSans = Noto_Sans({
    subsets: ['latin'],
    weight: ["100", "200", "400", "300", "500", "600", "700", "800", "900"]
})

export default function Layout({ children }: Props) {
    return (
        <div className={`${NotoSans.className} container mx-auto px-48 text-white py-8`}>{children}</div>
    )
}
