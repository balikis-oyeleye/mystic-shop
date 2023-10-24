"use client";

import { categories, sidebar, socialLinks } from "@/constants/navigations";
import Link from "next/link";
import { BsGem } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-head">
          <Link href="/" className="brand">
            <BsGem />
            <span>Mysticshop</span>
          </Link>
          <div className="links">
            <span>Follow us on:</span>
            {socialLinks.map((link) => (
              <Link href={link.to} target="_blank" key={link.to}>
                <link.icon />
              </Link>
            ))}
          </div>
        </div>
        <div className="footer-body">
          <p>Copyright © 2023. All Right Reserved </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
