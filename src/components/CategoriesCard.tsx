import { motion } from "framer-motion";
const CategoriesCard = ({
  title,
  image,
  index,
}: {
  title: string;
  image: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1.5, delay: index * 1 }}
      className={`${
        index % 2 !== 0 ? "mt-24" : ""
      } flex flex-col justify-center items-center w-[352px] h-[551px] gap-6 `}
    >
      <img src={image} alt="image" className="w-[352px] h-[512px] object-contain" />
      <h2 className="font-poppins font-bold text-[18px]">{title}</h2>
    </motion.div>
  );
};

export default CategoriesCard;
