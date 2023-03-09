import Link from "next/link"
import { ReactNode } from "react"

interface Props {
  className?: string,
  link?: string,
  children: ReactNode,
  onClick?: () => void
}

export default function Button({ children, className, link, onClick }: Props ) {
  return (
    <Link href={link ?? ''} onClick={onClick} className={`py-2 px-8 font-medium ${className}`}>{children}</Link>
  )
}
