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
        <>
            <div className="absolute h-[1000px] -z-10 w-full overflow-x-hidden blur-2xl">
                <span className="bg-[#FC165B] w-[750px] h-[750px] absolute z-[12] -top-[180px] left-[500px] rounded-full"></span>
                <span className="bg-[#16FCD2] w-[750px] h-[750px] absolute z-[11] top-0 left-[100px] rounded-full"></span>
                <span className="bg-[#FCA016] w-[750px] h-[750px] absolute z-[12] top-[250px] -left-[350px] rounded-full"></span>
            </div>
            <div className={`${NotoSans.className} container mx-auto xl:px-48 text-white py-8 bg-[#0B0B22] bg-opacity-90`}>
                {children}
            </div>
        </>
    )
}
