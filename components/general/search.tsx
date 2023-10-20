"use client";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { BsX } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { open, close } from "@/redux/features/searchSlice";
import { useEffect } from "react";

const Search = () => {
  const isOpen = useAppSelector((state) => state.searchReducer.isOpen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isOpen === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  console.log(isOpen);

  return (
    <div className={`search-modal ${isOpen ? "active-sm" : "inactive-sm"}`}>
      <div>
        <div>
          <BsX className="close" onClick={() => dispatch(close())} />
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
