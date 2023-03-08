import Link from "next/link"

interface Props {
    text: string,
    className?: string,
    link?: string,
}

export default function Button({ text, link, className }: Props) {
  return (
    <Link href={link ?? ''} className={`${className} py-2 px-6 rounded-md font-semibold`}>{text}</Link>
  )
}
