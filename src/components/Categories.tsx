import { categoriesData } from "../constants";
import CategoriesCard from "./CategoriesCard";
import arrowRight from "../assets/arrowRight.png";
const Categories = () => {
  return (
    <section className="flex flex-col justify-center items-center py-6 md:py-16 gap-16 ">
      <div className="flex flex-col justify-center items-center gap-3 text-center my-6">
        <h2 className="font-poppins font-bold text-[32px]">Categories</h2>
        <p className="font-poppins font-medium text-[18px] opacity-50">
          Find what you are looking for
        </p>
      </div>
      <div className="bg-primary w-full md:h-[841px] h-full  pb-16 relative">
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:-mt-16 mt-6">
          {categoriesData.map((item, index) => (
            <CategoriesCard index={index} key={item.title} title={item.title} image={item.image} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center  gap-6 my-6 md:my-16 ">
          <p className="font-poppins font-medium text-blackDim text-[18px]">
            Browse the complete collection
          </p>
          <button className="flex flex-row items-center gap-4 bg-white justify-center w-[168px] h-[51px] p-2 font-poppins font-medium text-[18px] rounded-md">
            See More <img src={arrowRight} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
