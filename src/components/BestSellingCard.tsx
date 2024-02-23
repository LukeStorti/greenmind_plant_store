interface BestSellingCardProps {
  title: string;
  price: string;
  image: string;
}

const BestSellingCard = ({ title, price, image }: BestSellingCardProps) => {
  return (
    <div className="flex flex-col w-[300px] h-[436px] gap-2">
      <img src={image} alt="product image" className="w-[299px] h-[363px] object-contain" />
      <h4 className="font-poppins font-medium text-[18px]">{title}</h4>
      <p className="font-poppins font-medium text-blackDim text-[18px] opacity-50">₱{price}</p>
    </div>
  );
};

export default BestSellingCard;
