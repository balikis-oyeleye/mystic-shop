"use client";

import Client from "./client";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { BiShoppingBag, BiMenu, BiX } from "react-icons/bi";
import { BsGem } from "react-icons/bs";
import Badge from "./badge";
import { open, close } from "@/redux/features/sidebarSlice";
import { navbar } from "@/constants/navigations";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const isOpen = useAppSelector((state) => state.sidebarReducer.isOpen);
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  return (
    <Client>
      <header className="header">
        <div>
          {isOpen ? (
            <BiX className="menu" onClick={() => dispatch(close())} />
          ) : (
            <BiMenu className="menu" onClick={() => dispatch(open())} />
          )}

          <Link href="/" className="header-brand">
            <BsGem />
            <span>Mysticshop</span>
          </Link>
          <nav className="header-nav">
            {navbar.map((nav) => (
              <Link
                href={nav.to}
                key={nav.link}
                className={pathname === nav.to ? "nav-active" : ""}
              >
                {nav.link}
              </Link>
            ))}
          </nav>
          <div className="header-cta">
            <div className="cart">
              <BiShoppingBag />
              <Badge text={99} />
            </div>
            <Link href="/register" className="btn-primary">
              Register
            </Link>
            <Link href="/login" className="btn-secondary">
              Log in
            </Link>
          </div>
        </div>
      </header>
    </Client>
  );
};

export default Navbar;
