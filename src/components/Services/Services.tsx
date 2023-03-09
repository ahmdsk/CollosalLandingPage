import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <div className="flex justify-center md:py-24 min-[300px]:py-8 min-[300px]:px-6 bg-[#221048] rounded-lg min-[300px]:mx-4 md:mx-0">
      <div className="flex flex-col justify-center items-center text-center w-full">
        <h3 className="text-[#16FCD2] font-semibold text-base">GET STARTED</h3>
        <h1 className="font-bold text-3xl pt-3 pb-5 md:w-[500px] min-[300px]:w-full">What do you need? Choose a service that can help you</h1>

        <div className="flex xl:flex-row min-[300px]::flex-col flex-wrap gap-3 justify-center w-full pt-12">
          <ServiceCard 
            bgClassName="bg-[#3F2379]" 
            textClassName="text-[#3F2379]" 
            title="UI Design" 
            price={1200} 
            desc={[
              '10 design pages',
              'Well-documented',
              '4 revisions',
              '$100/additional page'
            ]} />

          <ServiceCard 
            bgClassName="bg-[#233679]" 
            textClassName="text-[#233679]" 
            title="Development" 
            price={5000} desc={[
              'Web & Mobile',
              'Well-documented',
              '8 revisions',
              '$1000/additional feature'
            ]} />

          <ServiceCard 
            bgClassName="bg-[#792366]" 
            textClassName="text-[#792366]" 
            title="Maintenace" 
            price={3000} 
            desc={[
              'Daily backup',
              '3 hourse of maintenance',
              'Including fixing',
              '$50/additional hour'
            ]} />
        </div>
      </div>
    </div>
  )
}
