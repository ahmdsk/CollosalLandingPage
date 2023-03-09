import Image from "next/image";
import Button from "../Header/Button";

interface Props {
  title: string,
  description: string,
  image: string
}

export default function ProjectCard({ title, description, image }: Props) {
  return (
    <div className="flex flex-col justify-center">
      <Image src={image} alt="Projects" width={50} height={50} className="rounded-md border border-white border-opacity-10 w-96" />
      <div className="flex flex-col justify-center items-center py-6">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="font-light text-white text-opacity-60">{description}</p>
        <Button className="border-2 border-white rounded-full mt-8">Detail</Button>
      </div>
    </div>
  )
}
