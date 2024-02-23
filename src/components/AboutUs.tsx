import { aboutUsData } from "../constants";
import AboutUsCard from "./AboutUsCard";

const AboutUs = () => {
  return (
    <section className="flex flex-col justify-center items-center py-6 md:py-16  px-6 sm:px-16">
      <div className="flex flex-col justify-center items-center gap-3 text-center">
        <h2 className="font-poppins font-bold text-[32px]">About Us</h2>
        <p className="font-poppins font-medium text-[18px] opacity-50">
          Order now and appreciate the beauty of nature
        </p>
      </div>
      <div className="flex flex-col md:flex-row my-16 gap-16 ">
        {aboutUsData.map((item) => (
          <AboutUsCard key={item.title} title={item.title} desc={item.desc} image={item.image} />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
