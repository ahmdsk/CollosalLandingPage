import Link from "next/link"
import { ReactNode } from "react"

type Props = {
    url: string,
    children: ReactNode,
    key: number
}

export default function MenuLink({ url, children }: Props) {
  return (
    <Link href={url} className="text-md">{children}</Link>
  )
}
