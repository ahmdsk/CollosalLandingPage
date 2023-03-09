import Image from "next/image";

interface Props {
    pict: string,
    name: string,
    job: string,
    quote: string
}

export default function TestimonialsCard({ pict, name, job, quote }: Props) {
    return (
        <div className="bg-white bg-opacity-5 rounded-sm px-6 py-10 xl:w-4/12 xl:mx-0 sm:mx-24 hover:-translate-y-10 hover:border-2 border-[#6016FC] transition-all duration-200">
            <div className="flex justify-center">
                <div className="w-fit relative">
                    <Image src={pict} alt="User" width={50} height={50} className="w-20 rounded-full" />
                    <Image src="/collosal/QuoteBadge.svg" alt="Quote" width={50} height={50} className="w-8 absolute bottom-0 -right-3" />
                </div>
            </div>
            <div className="py-6">
                <h2 className="font-bold text-lg">{name}</h2>
                <h5 className="text-white text-opacity-60 font-medium text-sm">{job}</h5>
            </div>
            <div className="text-center px-3">
                <p className="font-medium">"{`${quote}`}"</p>
            </div>
        </div>
    )
}
