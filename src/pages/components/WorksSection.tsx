import Image from "next/image";

export default function WorksSection() {
  return (
    <div className="flex gap-3 items-center py-16">
        <div className="w-6/12">
            <Image src="/collosal/Works.svg" alt="How We Work" width={800} height={800} />
        </div>
        <div className="w-6/12">
            <h3 className="text-[#16FCD2] font-semibold text-base">HOW WE WORK?</h3>
            <h1 className="font-bold text-3xl pt-3 pb-5">Everything is well planned, well designed and developed wholeheartedly</h1>
            <p className="text-white text-opacity-40">Careful planning makes us confident, developed with best practices so that the project can be maintained. We always test projects before they are shipped.</p>
        </div>
    </div>
  )
}
