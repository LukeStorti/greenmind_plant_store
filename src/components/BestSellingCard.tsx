import { motion } from "framer-motion";

interface BestSellingCardProps {
  title: string;
  price: string;
  image: string;
  i: number;
}

const BestSellingCard = ({ i, title, price, image }: BestSellingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, delay: i * 1 }}
      className="flex flex-col w-[300px] h-[436px] gap-2"
    >
      <img src={image} alt="product image" className="w-[299px] h-[363px] object-contain" />
      <h4 className="font-poppins font-medium text-[18px]">{title}</h4>
      <p className="font-poppins font-medium text-blackDim text-[18px] opacity-50">₱{price}</p>
    </motion.div>
  );
};

export default BestSellingCard;
