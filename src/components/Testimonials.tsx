import line3 from "../assets/line3.png";
import { testimonialData } from "../constants";
import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimate";
import { boxVariant } from "../constants";
const Testimonials = () => {
  const { ref, controls, variants } = useScrollAnimation({ variant: boxVariant });
  return (
    <motion.section
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className="flex flex-col py-6 md:py-16  px-6 sm:px-16 items-center "
    >
      <div className="flex flex-row items-center justify-between  w-full border-black">
        <h4 className="font-poppins font-bold text-[32px]">What customers say about GREENMIND?</h4>
        <img src={line3} alt="line decoration" className="hidden md:block" />
      </div>
      <div className="flex flex-col md:flex-row my-16 gap-16">
        {testimonialData.map((item, i) => (
          <TestimonialCard
            key={item.image}
            title={item.title}
            name={item.name}
            image={item.image}
            desc={item.desc}
            rating={item.rating}
            i={i}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
