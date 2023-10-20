"use client";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { BsX } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={`search-modal ${false ? "active-sm" : "inactive-sm"}`}>
      <div>
        <div>
          <BsX className="close" />
          <form>
            <input type="text" placeholder="Search..." required />
            <button>
              <CiSearch />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
