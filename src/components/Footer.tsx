import { DM_Sans } from "next/font/google";
import Image from "next/image";

const DMSans = DM_Sans({ subsets: ['latin'], weight: '700' })
const services = ['Web Development', 'App Development', 'UI Design', 'Consultation', 'Maintenance']
const company = ['About', 'Contact', 'Send Quote', 'Privacy Policy', 'Term of Service', 'Jobs']
const resources = ['Support', 'Documentation', 'License', 'Sitemap']

export default function Footer() {
  return (
    <div className="flex sm:flex-wrap pt-24 mx-16">
        <div className="xl:w-3/12 sm:w-full sm:mb-10">
            <div className="flex gap-4 items-center pb-4">
                <Image src="/collosal/Logo.svg" alt="Collosal" width={25} height={25} />
                <h1 className={`${DMSans.className} text-lg`}>Collosal.</h1>
            </div>
            <h3 className="font-medium text-white text-opacity-60">Copyright &copy; 2021 <br /> Design By Collosal LLC</h3>
        </div>
        <div className="xl:w-3/12 sm:w-full sm:mb-10 space-y-4">
            <h1 className="uppercase font-medium text-sm">Services</h1>
            {services.map((s, i) => {
                return <h3 className="text-white text-opacity-60" key={i}>{s}</h3>
            })}
        </div>
        <div className="xl:w-3/12 sm:w-full sm:mb-10 space-y-4">
            <h1 className="uppercase font-medium text-sm">Company</h1>
            {company.map((c, i) => {
                return <h3 className="text-white text-opacity-60" key={i}>{c}</h3>
            })}
        </div>
        <div className="xl:w-3/12 sm:w-full sm:mb-10 space-y-4">
            <h1 className="uppercase font-medium text-sm">Resources</h1>
            {resources.map((r, i) => {
                return <h3 className="text-white text-opacity-60" key={i}>{r}</h3>
            })}
        </div>
    </div>
  )
}
