import { Navbar, Hero, BestSelling, AboutUs, Categories, Testimonials, Footer } from "./components";

// https://www.figma.com/file/bNgJr9s7cSUyTCtXjU6oYT/E-Commerce-Plant-Shop-Website-(Community)?type=design&node-id=17-40&mode=design&t=WUkF4YoIPqNHPl7E-0

function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-col  justify-center items-center sm:px-16 px-6">
        <div className="xl:max-w-[1280xp] w-full">
          <Navbar />
          <Hero />
          <BestSelling />
          <AboutUs />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-full">
          <Categories />
        </div>
      </div>

      <div className="flex flex-col  justify-center items-center sm:px-16 px-6">
        <div className="xl:max-w-[1280xp] w-full">
          <Testimonials />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
