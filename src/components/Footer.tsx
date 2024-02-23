import logo from "../assets/logo.png";
import social from "../assets/social.png";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <section className="flex justify-center items-center sm:py-16 py-6 flex-col bg-primary px-6">
      <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
        <div className="flex-[1] flex flex-col justify-start mr-10 px-2 gap-3">
          <img src={logo} alt="logo" className="w-[107px] h-[29px] object-contain" />
          <p className="font-poppins font-normal opacity-50 text-[18px] leading-[30.8px] mt-4 max-w-[310px]">
            We help you find your dream plant
          </p>
          <img src={social} alt="" className="w-[192px] h-[48px] object-contain cursor-pointer" />
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-start md:justify-end flex-wrap md:mt-0 mt-10 mr-10">
          {footerLinks.map((footerlink) => (
            <div key={footerlink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins font-bold text-[18px]">{footerlink.title}</h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link) => (
                  <li
                    key={link}
                    className="font-poppins font-normal text-[18px] opacity-50 cursor-pointer hover:opacity-100 mb-4"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
