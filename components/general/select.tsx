"use client";
import { useSearchParams, useRouter } from "next/navigation";
import queryString from "query-string";
import { useCallback, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface SelectProps {
  name: string;
  page: string;
  options: {
    label: string;
    value: string;
  }[];
}

const Select = ({ name, options, page }: SelectProps) => {
  const [dropdown, setOpenDropdown] = useState(false);
  const params = useSearchParams();
  const router = useRouter();

  const openDropdown = () => setOpenDropdown((prev) => !prev);

  const handleClick = useCallback(
    (value: string) => {
      openDropdown();

      let currentQuery = {};

      if (params) {
        currentQuery = queryString.parse(params.toString());
      }

      const updatedQuery: any = {
        ...currentQuery,
        [name]: value,
      };

      if (params?.get(name) === value) {
        delete updatedQuery[name];
      }

      const url = queryString.stringifyUrl(
        {
          url: `/${page}`,
          query: updatedQuery,
        },
        { skipNull: true }
      );

      router.push(url);
    },
    [router, params, name]
  );

  return (
    <div className="select">
      <button className="select-title" onClick={openDropdown}>
        <span>{name}</span>
        <BsChevronDown />
      </button>
      <div
        className={`select-options ${dropdown ? "active-sel" : "inactive-sel"}`}
      >
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleClick(option.value)}
            className={params?.get(name) === option.value ? "active-sb" : ""}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Select;
