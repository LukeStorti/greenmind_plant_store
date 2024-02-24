import { motion } from "framer-motion";
interface AboutUsCardProps {
  title: string;
  desc: string;
  image: string;
  i: number;
}

const AboutUsCard = ({ title, desc, image, i }: AboutUsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, delay: i * 1.1 }}
      className="flex flex-col w-[400px] h-[213px] justify-center items-center  gap-6 px-4 my-6 "
    >
      <img src={image} alt="icon" className="w-[96px] h-[96px] object-contain" />
      <h4 className="font-poppins font-bold text-[18px]">{title}</h4>
      <p className="font-poppins font-medium  text-[18px] opacity-50 text-center">{desc}</p>
    </motion.div>
  );
};

export default AboutUsCard;
