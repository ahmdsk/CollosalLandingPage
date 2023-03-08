import Image from "next/image";
import Button from "./Button";

export default function OurTeam() {
  return (
    <div className="flex gap-3 items-center py-16">
        <div className="w-6/12">
            <h3 className="text-[#16FCD2] font-semibold text-base">OUR TEAM</h3>
            <h1 className="font-bold text-3xl pt-3 pb-5">We're a team of designers, engineers and analysts</h1>
            <p className="text-white text-opacity-40 pb-12">Our team consists of many creative people. We are committed to maintaining quality work as well as speed. These creative people work together to create maximum work results.</p>
            <Button text="See Our Teams" className="bg-white bg-opacity-10 px-12 py-3" />
        </div>
        <div className="w-6/12">
            <Image src="/collosal/TeamIllustration.svg" alt="How We Work" width={800} height={800} />
        </div>
    </div>
  )
}