import { motion } from "framer-motion";
import star from "../assets/star.png";

type TestimonialCardProps = {
  title: string;
  name: string;
  desc: string;
  image: string;
  rating: number;
  i: number;
};

const TestimonialCard = ({ title, name, desc, image, rating, i }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, delay: i * 1 }}
      className="bg-primary rounded-md p-6 flex flex-col justify-start w-full md:w-[800px]"
    >
      <p className="font-poppins font-medium text-[18px]">{desc}</p>
      <div className="flex flex-row justify-between items-center">
        <img src={image} alt="" />
        <div className="flex flex-col justify-start  flex-1">
          <h4 className="font-poppins font-bold text-[18px]">{name}</h4>
          <p className="font-poppins font-medium text-[12px] opacity-50">{title}</p>
        </div>
        <span className="flex flex-row gap-2 font-poppins font-bold text-[18px] ">
          <img src={star} alt="" className="object-contain" /> {rating}
        </span>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
