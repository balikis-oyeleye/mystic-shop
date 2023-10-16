"use client";

import { sidebar } from "@/constants/navigations";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";

const Sidebar = () => {
  const isOpen = useAppSelector((state) => state.sidebarReducer.isOpen);

  return (
    <div className={`sidebar ${isOpen ? "active" : "inactive"}`}>
      <div>
        {sidebar.map((nav) => (
          <Link href={nav.to} key={nav.link}>
            {nav.link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
