"use client";

import Client from "./client";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGem, BsPerson, BsPersonCheck } from "react-icons/bs";
import { PiShoppingBagThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import Badge from "./badge";
import { open, close } from "@/redux/features/sidebarSlice";
import { open as openCm } from "@/redux/features/cartModalSlice";
import { navbar } from "@/constants/navigations";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

const Navbar = ({ customer }: AuthenticatedType) => {
  const isOpen = useAppSelector((state) => state.sidebarReducer.isOpen);
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const size = useWindowSize();

  useEffect(() => {
    if (size.width! > 769) {
      dispatch(close());
    }
  }, [size]);

  return (
    <Client>
      <header className="header">
        <div>
          <div className="menu">
            {isOpen ? (
              <BiX onClick={() => dispatch(close())} />
            ) : (
              <BiMenu onClick={() => dispatch(open())} />
            )}
          </div>
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
            <Link href="/login">
              {customer ? (
                <BsPersonCheck className="auth" />
              ) : (
                <BsPerson className="auth" />
              )}
            </Link>
            <div className="cart">
              <Link href="/wishlist" onClick={() => dispatch(close())}>
                <CiHeart />
              </Link>
              <Badge text={99} />
            </div>
            <div className="cart">
              <PiShoppingBagThin
                onClick={() => {
                  dispatch(close());
                  dispatch(openCm());
                }}
              />
              <Badge text={99} />
            </div>
          </div>
        </div>
      </header>
    </Client>
  );
};

export default Navbar;
