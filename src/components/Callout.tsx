import Button from "./Button";

export default function Callout() {
  return (
    <div className="flex xl:flex-row sm:flex-col gap-2 justify-between xl:items-center mx-16 py-10 border-y border-white border-opacity-5">
        <h1 className="xl:w-7/12 text-3xl font-bold">We've prepared everything, it's time for you to tell the problem</h1>
        <div className="xl:w-5/12 flex items-center xl:justify-end gap-2 sm:pt-3">
            <Button className="bg-[#6016FC] px-14 py-3 rounded-sm">Send Quote</Button>
            <Button className="bg-white bg-opacity-10 px-14 py-3 rounded-sm">Ask Us</Button>
        </div>
    </div>
  )
}
