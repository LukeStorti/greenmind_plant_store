import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import categories1 from "../assets/categories1.png";
import categories2 from "../assets/categories2.png";
import categories3 from "../assets/categories3.png";
import testimonial1 from "../assets/testimonial1.png";
import testimonial2 from "../assets/testimonial2.png";

export const navlinks = [
  { name: "Home", link: "/home", href: "home" },
  { name: "Products", link: "/products", href: "products" },
  { name: "Contacts", link: "/contacts", href: "contacts" },
];

export const bestSellingData = [
  { id: 1, title: "Natural Plants", price: "1,400.00", image: product1 },
  { id: 2, title: "Artificial Plants", price: "900.00", image: product2 },
  { id: 3, title: "Artificial Plants", price: "3,500.00", image: product3 },
];

export const aboutUsData = [
  {
    title: "Large Assorment",
    desc: "we offer many different types of products with fewer variations in each category.",
    image: about1,
  },
  {
    title: "Fast & Free Shipping",
    desc: "4-day or less delivery time, free shipping and an expedited delivery option.",
    image: about2,
  },
  {
    title: "24/7 Support",
    desc: "answers to any business related inquiry 24/7 and in real-time.",
    image: about3,
  },
];

export const categoriesData = [
  { title: "Natural Plants", image: categories1 },
  { title: "Plant Accessories", image: categories2 },
  { title: "Artificial Plants", image: categories3 },
];

export const testimonialData = [
  {
    name: "John Doe",
    title: "Youtuber",
    desc: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    image: testimonial1,
    rating: 4,
  },
  {
    name: "Jane Doe",
    title: "Youtuber",
    desc: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    image: testimonial2,
    rating: 5,
  },
];

export const footerLinks = [
  { title: "Information", links: ["About", "Product", "Blog"] },
  { title: "Company", links: ["Community", "Career", "Our Story"] },
  { title: "Contact", links: ["Getting Started", "Pricing", "Resources"] },
];

export const boxVariant = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, staggerChildren: 0.1, delayChildren: 0.3 },
  },
  hidden: { opacity: 0, x: -100 },
};
