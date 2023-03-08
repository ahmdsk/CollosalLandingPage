import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function CardWrapper({ children }: Props) {
  return <div className="flex gap-5 justify-between pt-10 pb-6">{children}</div>
}
