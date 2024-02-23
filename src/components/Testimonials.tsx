import line3 from "../assets/line3.png";
import { testimonialData } from "../constants";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="flex flex-col py-6 md:py-16  px-6 sm:px-16 items-center ">
      <div className="flex flex-row items-center justify-between  w-full border-black">
        <h4 className="font-poppins font-bold text-[32px]">What customers say about GREENMIND?</h4>
        <img src={line3} alt="line decoration" className="hidden md:block" />
      </div>
      <div className="flex flex-col md:flex-row my-16 gap-16">
        {testimonialData.map((item) => (
          <TestimonialCard
            key={item.image}
            title={item.title}
            name={item.name}
            image={item.image}
            desc={item.desc}
            rating={item.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
