import Card from "./Card";

export default function CardWrapper() {
  return (
    <div className="flex xl:flex-row sm:flex-col gap-5 justify-between pt-10 pb-6">
      <Card image="/collosal/icons/figma.svg" title="Design" description="The project interface will be designed first, our favorite tool is Figma." />
      <Card image="/collosal/icons/code.svg" title="Develop" description="Transform design and write business logic here. Choose the technology you want." />
      <Card image="/collosal/icons/box.svg" title="Ship" description="After the work is complete, we will send the project and all its assets to you." />
    </div>
  )
}
