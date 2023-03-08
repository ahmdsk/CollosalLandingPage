import TestimonialsCard from "./TestimonialsCard";

export default function Testimonials() {
    return (
        <div className="flex justify-center py-24 rounded-lg">
            <div className="flex flex-col justify-center items-center text-center w-full">
                <h3 className="text-[#16FCD2] font-semibold text-base">TESTIMONIAL</h3>
                <h1 className="font-bold text-3xl pt-3 pb-5 w-[500px]">What do our clients say that we never let down?</h1>

                <div className="flex gap-3 justify-center w-full pt-12">
                    <TestimonialsCard 
                        pict="https://randomuser.me/api/portraits/men/75.jpg" 
                        name="Courtney Henry" 
                        job="Biffco Enterprises Ltd." 
                        quote="Very easy to use. I made back the purchase price in just 48 hours! It's great. It's is both attractive and highly adaptable." />

                    <TestimonialsCard 
                        pict="https://randomuser.me/api/portraits/women/71.jpg" 
                        name="Esther Howard" 
                        job="Abstergo Ltd." 
                        quote="Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business." />

                    <TestimonialsCard 
                        pict="https://randomuser.me/api/portraits/men/62.jpg" 
                        name="Ronald Richards" 
                        job="Barone LLC." 
                        quote="I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. " />
                </div>

                <div className="flex gap-2 justify-center pt-16">
                    <span className="rounded-full bg-white w-3 h-3"></span>
                    <span className="rounded-full bg-white bg-opacity-10 w-3 h-3"></span>
                    <span className="rounded-full bg-white bg-opacity-10 w-3 h-3"></span>
                </div>
            </div>
        </div>
    )
}
