import Button from "./Button";

interface Props {
    bgClassName: string,
    textClassName: string
}

export default function ServiceCard({ bgClassName, textClassName }: Props) {
    return (
        <div className={`rounded-md pt-10 pb-6 px-10 w-3/12 ${bgClassName}`}>
            <div className="flex justify-between border-b-2 border-white border-opacity-5 pb-6">
                <h3 className="font-bold">UI Design</h3>
                <div className="text-left">
                    <p className="font-light text-xs text-white text-opacity-60 pb-1">Starting from</p>
                    <h2 className="font-bold text-4xl">1200$</h2>
                </div>
            </div>
            <div className="text-center py-6">
                <p className="pb-4 font-medium">10 design pages</p>
                <p className="pb-4 font-medium">Well-documented</p>
                <p className="pb-4 font-medium">4 revisions</p>
                <p className="pb-4 font-medium">$100/additional page</p>
            </div>
            <Button text="Detail" className={`bg-white text-gray-700 font-semibold inline-block w-full ${textClassName}`} />
        </div>
    )
}
