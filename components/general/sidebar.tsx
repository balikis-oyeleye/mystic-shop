"use client";

import { sidebar } from "@/constants/navigations";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const isOpen = useAppSelector((state) => state.sidebarReducer.isOpen);

  useEffect(() => {
    if (isOpen === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  return (
    <div className={`sidebar ${isOpen ? "active" : "inactive"}`}>
      <div>
        {sidebar.map((nav) => (
          <Link
            href={nav.to}
            key={nav.link}
            className={pathname === nav.to ? "active" : ""}
          >
            {nav.link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
