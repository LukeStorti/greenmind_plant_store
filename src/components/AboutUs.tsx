import { aboutUsData } from "../constants";
import AboutUsCard from "./AboutUsCard";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className=" flex flex-col justify-center items-center py-6 md:py-24  px-6 sm:px-16 my-16"
    >
      <div className="flex flex-col justify-center items-center gap-3 text-center">
        <h2 className="font-poppins font-bold text-[32px]">About Us</h2>
        <p className="font-poppins font-medium text-[18px] opacity-50">
          Order now and appreciate the beauty of nature
        </p>
      </div>
      <div className="flex flex-col md:flex-row my-16 gap-16 ">
        {aboutUsData.map((item, i) => (
          <AboutUsCard
            i={i}
            key={item.title}
            title={item.title}
            desc={item.desc}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
