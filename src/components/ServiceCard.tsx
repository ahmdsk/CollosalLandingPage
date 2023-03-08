import Button from "./Button";

interface Props {
    bgClassName: string,
    textClassName: string,
    title: 'UI Design' | 'Development' | 'Maintenace',
    price: 1200 | 5000 | 3000,
    desc: string[]
}

export default function ServiceCard({ bgClassName, textClassName, title, price, desc }: Props) {
    return (
        <div className={`rounded-md pt-10 pb-6 px-8 w-3/12 ${bgClassName}`}>
            <div className="flex justify-between border-b-2 border-white border-opacity-5 pb-6">
                <h3 className="font-bold">{title}</h3>
                <div className="text-left">
                    <p className="font-light text-xs text-white text-opacity-60 pb-1">Starting from</p>
                    <h2 className="font-bold text-4xl">{price}$</h2>
                </div>
            </div>
            <div className="text-center py-6">
                {desc.map((d) => {
                    return <p className="pb-4 font-medium">{d}</p>
                })}
            </div>
            <Button text="Detail" className={`bg-white text-gray-700 font-semibold inline-block w-full ${textClassName}`} />
        </div>
    )
}
