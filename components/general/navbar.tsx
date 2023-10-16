import React from "react";
import Client from "./client";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { BiShoppingBag, BiMenu } from "react-icons/bi";
import { BsGem } from "react-icons/bs";
import Badge from "./badge";
import { open } from "@/redux/features/sidebarSlice";

const Navbar = () => {
  const isOpen = useAppSelector((state) => state.sidebarReducer.isOpen);
  const dispatch = useAppDispatch();

  return (
    <Client>
      <header className="header">
        <BiMenu className="menu" />
        <Link href="/" className="header-brand">
          <BsGem onClick={() => dispatch(open())} />
          <span>Mysticshop</span>
        </Link>
        <nav className="header-nav">
          <Link href="/">About</Link>
          <Link href="/">Categories</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Shop</Link>
        </nav>
        <div className="header-cta">
          <div className="cart">
            <BiShoppingBag />
            <Badge text={99} />
          </div>
          <Link href="/" className="register">
            Register
          </Link>
          <Link href="/" className="login">
            Log in
          </Link>
        </div>
      </header>
    </Client>
  );
};

export default Navbar;
