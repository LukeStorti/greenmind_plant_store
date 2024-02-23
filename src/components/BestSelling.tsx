import { BestSellingCard } from ".";
import arrowRight from "../assets/arrowRight.png";
import { bestSellingData } from "../constants";

const BestSelling = () => {
  return (
    <section
      id="products"
      className="flex md:flex-row flex-col py-6 md:py-16  px-6 sm:px-16 items-center"
    >
      <div className="flex flex-col md:w-1/4 w-full gap-6 my-6 md:my-16 ">
        <h2 className="font-poppins font-bold text-[32px] ">Best Selling Plants</h2>
        <p className="font-poppins font-medium text-blackDim text-[18px] ">
          Easiest way to healthy life by buying your favorite plants
        </p>
        <button className="flex flex-row items-center gap-4 bg-primary justify-center w-[168px] h-[51px] p-2 font-poppins font-medium text-[18px] rounded-md">
          See More <img src={arrowRight} alt="" />
        </button>
      </div>
      <div className="flex flex-col md:flex-row w-3/4 items-center justify-evenly gap-6 my-16">
        {bestSellingData.map((item) => (
          <BestSellingCard title={item.title} key={item.id} price={item.price} image={item.image} />
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
