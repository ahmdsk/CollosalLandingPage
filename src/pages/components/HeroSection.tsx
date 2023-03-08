import Button from "./Button";

export default function HeroSection() {
  return (
    <div className="flex justify-center text-center py-12">
        <div className="w-[600px]">
            <h3 className="font-semibold text-[#16FCD2]">CLIENT-DEVELOPMENT DRIVEN</h3>
            <h1 className="font-bold text-4xl py-9">We Design. We Develop. We Ship. In The Same Day.</h1>
            <p className="text-white text-opacity-60 px-8">We are committed to not making clients wait. We will deliver the work as quickly as possible. Even on the same day. Even so, we do not reduce the quality of our work.</p>
            <div className="flex gap-5 justify-center pt-9">
                <Button text="Send Quote" className="bg-[#6016FC] px-12 py-3" />
                <Button text="Learn More" className="bg-white bg-opacity-10 px-12 py-3" />
            </div>
        </div>
    </div>
  )
}
