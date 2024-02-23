import logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import user from "../assets/user.png";
import line from "../assets/Line 1.png";
import menu from "../assets/menu.png";
import { navlinks } from "../constants";

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 md:py-16 justify-between items-center">
      <img src={logo} alt="Greenmind text logo" className="w-[142px] h-[39px] object-contain" />
      <ul className="list-none sm:flex hidden justify-start items-center flex-1 ml-4 ">
        {navlinks.map((link) => (
          <li
            key={link.name}
            className={`font-poppins font-medium cursor-pointer text-[18px] text-blackDim hover:text-black ml-10 opacity-50 hover:opacity-100`}
          >
            <a href={`#${link.href}`}>{link.name}</a>
          </li>
        ))}
      </ul>
      <div className="flex flex-row items-center justify-end w-[216px] gap-4  md:gap-10">
        <img src={cart} alt="cart icon" className="cursor-pointer hidden sm:block" />
        <img src={user} alt="user icon" className="cursor-pointer hidden sm:block" />
        <img src={line} alt="line divider" className=" hidden sm:block" />
        <img src={menu} alt="menu icon" className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
