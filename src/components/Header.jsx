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
        className="bg-blue-600  bg-opacity-80 p-2 text-xl rounded-lg cursor-pointer font-semibold flex flex-col mt-3 items-center gap-1"
      >
        <span className="border px-2 -tracking-tighter">PARLIAMENT</span>
        <p className="text-sm border-dotted border-b border-t flex gap-1 ">
          <span className="bg-red-500">Cİ</span>
          <span className="bg-cyan-500">NE</span>
          <span className="bg-orange-400">MA</span>
          <span className="bg-blue-900">CLUB</span>
        </p>
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
