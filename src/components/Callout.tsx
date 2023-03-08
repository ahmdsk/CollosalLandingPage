import Button from "./Button";

export default function Callout() {
  return (
    <div className="flex gap-2 justify-between items-center mx-16 py-10 border-y border-white border-opacity-5">
        <h1 className="w-7/12 text-3xl font-bold">We've prepared everything, it's time for you to tell the problem</h1>
        <div className="w-5/12 flex items-center justify-end gap-2">
            <Button text="Send Quote" className="bg-[#6016FC] px-14 py-3" />
            <Button text="Ask Us" className="bg-white bg-opacity-10 px-14 py-3" />
        </div>
    </div>
  )
}
