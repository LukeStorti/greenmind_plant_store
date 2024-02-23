import line2 from "../assets/line2.png";
import search from "../assets/search.png";
import hero from "../assets/hero.png";
import rectangle from "../assets/rectangle.png";
import arrow1 from "../assets/arrow1.png";
import arrow2 from "../assets/arrow2.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex md:flex-row flex-col py-6  bg-primary rounded-md px-6 sm:px-16"
    >
      <div className="md:w-1/2 w-full flex flex-col">
        <h1 className="font-poppins font-extrabold text-[64px]">
          Buy your <br className="hidden md:block" />
          dream plants
        </h1>
        <div className="flex flex-row md:w-1/2 w-full sm:my-6 my-2 justify-start gap-12">
          <div className="flex flex-col">
            <h2 className="font-poppins font-medium text-[32px]">50+</h2>
            <h2 className="font-poppins font-medium text-[18px]">Plant Species</h2>
          </div>
          <img src={line2} alt="live break" />
          <div className="flex flex-col">
            <h2 className="font-poppins font-medium text-[32px]">100+</h2>
            <h2 className="font-poppins font-medium text-[18px]">Customers</h2>
          </div>
        </div>
        <div className="bg-white w-full sm:w-2/3 flex flex-row py-2 px-2 justify-between rounded-lg my-6">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex flex-1 text-[18px]"
          />
          <span className="bg-primary h-[48px] w-[48px] rounded-lg flex justify-center items-center">
            <img src={search} alt="" className="object-fill" />
          </span>
        </div>
      </div>
      <div className="md:w-1/2 w-full relative hidden md:flex">
        <img src={hero} alt="" className="absolute right-0 -bottom-6 z-10" />
        <img src={rectangle} alt="" className="hidden md:block absolute right-6 -bottom-6 z-5" />
        <img
          src={arrow1}
          alt=""
          className="w-[112px] h-[154px] object-contain absolute -right-4 -top-4"
        />
        <img
          src={arrow2}
          alt=""
          className="w-[182px] h-[169px] object-contain absolute bottom-0 left-0"
        />
      </div>
    </section>
  );
};

export default Hero;
