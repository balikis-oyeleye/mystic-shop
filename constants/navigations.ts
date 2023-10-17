import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

export const navbar = [
  { to: "/", link: "Home" },
  { to: "/about", link: "About" },
  { to: "/categories", link: "Categories" },
  { to: "/contact", link: "Contact" },
  { to: "/faqs", link: "Faqs" },
];

export const sidebar = [
  { to: "/", link: "Home" },
  { to: "/about", link: "About" },
  { to: "/categories", link: "Categories" },
  { to: "/contact", link: "Contact" },
  { to: "/faqs", link: "Faqs" },
  { to: "/register", link: "Register" },
  { to: "/login", link: "Log in" },
];

export const socialLinks = [
  { to: "https://github.com/balikis-oyeleye", icon: BsGithub },
  { to: "https://www.linkedin.com/in/balikis-oyeleye/", icon: BsLinkedin },
  { to: "https://twitter.com/balikis_oyeleye", icon: BsTwitter },
];

export const categories = [
  { to: "/categories/furniture", category: "furniture" },
  { to: "/categories/beddings", category: "beddings" },
  { to: "/categories/accessories", category: "accessories" },
  { to: "/categories/clocks", category: "clocks" },
  { to: "/categories/lightings", category: "lightings" },
];
