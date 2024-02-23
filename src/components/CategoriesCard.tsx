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
    <div
      className={`${
        index % 2 !== 0 ? "mt-24" : ""
      } flex flex-col justify-center items-center w-[352px] h-[551px] gap-6 `}
    >
      <img src={image} alt="image" className="w-[352px] h-[512px] object-contain" />
      <h2 className="font-poppins font-bold text-[18px]">{title}</h2>
    </div>
  );
};

export default CategoriesCard;
