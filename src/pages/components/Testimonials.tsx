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

export default function Testimonials() {
  return (
    <div className="flex items-center justify-evenly mt-7 py-10 border-y-2 border-white border-opacity-10">
        {Clients.map((client, index) => {
            return <Image src={client.image} alt={client.name} key={index} width={100} height={100} />
        })}
    </div>
  )
}
