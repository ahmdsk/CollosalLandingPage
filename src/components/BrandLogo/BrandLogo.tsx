import Image from "next/image";

const Clients = [
    {
        image: '/collosal/testimonial/Github.png',
        name: 'Github'
    },
    {
        image: '/collosal/testimonial/Forbes.png',
        name: 'Forbes'
    },
    {
        image: '/collosal/testimonial/Google.png',
        name: 'Google'
    },
    {
        image: '/collosal/testimonial/Microsoft.png',
        name: 'Microsoft'
    },
    {
        image: '/collosal/testimonial/Facebook.png',
        name: 'Facebook'
    }
]

export default function BrandLogo() {
  return (
    <div className="flex items-center justify-evenly min-[300px]:gap-5 md:gap-0 mt-7 py-10 border-y-2 border-white border-opacity-10 min-[300px]:mx-4 md:mx-0 min-[300px]:px-4 md:px-0">
        {Clients.map((client, index) => {
            return <Image src={client.image} alt={client.name} key={index} width={100} height={100} />
        })}
    </div>
  )
}
