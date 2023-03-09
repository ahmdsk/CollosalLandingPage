import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="flex justify-center py-20 border-t-2 mt-6 border-white border-opacity-10">
        <div className="flex flex-col justify-center items-center text-center">
            <h3 className="text-[#16FCD2] font-semibold text-base">PROJECTS</h3>
            <h1 className="font-bold text-3xl pt-3 pb-5 md:w-[500px] min-[300px]:w-full">We have completed many amazing projects that you will not believe</h1>
            
            <div className="flex flex-wrap gap-5 justify-center pt-12">
                <ProjectCard title="The Mobile App Landing Page" description="A landing page for mobile app" image="/collosal/ProjectMobile.svg" />
                <ProjectCard title="The Desktop App Landing Page" description="A landing page for desktop app" image="/collosal/ProjectDesktop.svg" />
            </div>
        </div>
    </div>
  )
}
