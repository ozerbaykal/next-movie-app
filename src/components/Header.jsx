"use client";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Header = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const menu = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Sign In",
      url: "/login",
    },
  ];
  const searchFunc = (e) => {
    if (e.key === "Enter" && keyword.trim().length >= 3) {
      router.push(`/search/${keyword}`);
      setKeyword("");
    }
  };

  return (
    <div className="flex items-center gap-10 h-20 p-5">
      <Link
        href={"/"}
        className="bg-amber-600 p-3 text-2xl rounded-lg font-bold cursor-pointer"
      >
        Movie App
      </Link>

      <div className="flex flex-1 items-center gap-2 border rounded-md p-3">
        <input
          value={keyword}
          onKeyDown={searchFunc}
          onChange={(e) => setKeyword(e.target.value)}
          type="text"
          placeholder="Search Movie"
          className="flex-1 px-2 outline-none py-1 rounded-md  bg-transparent text-gray-600 font-semibold"
        />
        <BiSearch size={25} />
      </div>
      <ThemeComp />

      {menu.map((mn, key) => (
        <MenuItem mn={mn} key={key} />
      ))}
    </div>
  );
};

export default Header;
