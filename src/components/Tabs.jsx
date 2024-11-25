"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  const tabs = [
    {
      name: "En Populer",
      url: "popular",
    },
    {
      name: "En Son",
      url: "now_playing",
    },
    {
      name: "Yakında Gelecekler",
      url: "upcoming",
    },
  ];

  return (
    <div className="p-5 m-5 gap-7 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
      {tabs.map((tab, i) => (
        <Link
          href={`/?genre=${tab.url}`}
          className={`cursor-pointer hover:opacity-75 transition font-semibold ${
            genre === tab.url
              ? "underline underline-offset-4 text-amber-600"
              : " "
          }`}
          key={i}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
