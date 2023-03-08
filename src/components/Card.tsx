import Image from "next/image";

interface Props {
    image: string,
    title: string,
    description: string
}

export default function Card({ image, title, description }: Props) {
  return (
    <div className="w-4/12 p-8 bg-white bg-opacity-5 rounded-md">
        <div className="bg-white bg-opacity-[0.03] rounded-md w-fit p-4 aspect-square mb-6">
            <Image src={image} alt={title} width={30} height={30} />
        </div>
        <h1 className="text-lg font-bold pb-3">{title}</h1>
        <p className="text-white text-opacity-60 leading-relaxed">{description}</p>
    </div>
  )
}
