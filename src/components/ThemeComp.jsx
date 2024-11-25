"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

const ThemeComp = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null; // Hydration tamamlanana kadar hiçbir şey render etmiyoruz.
  }

  const themeMode = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {mounted &&
        (themeMode === "dark" ? (
          <CiLight
            onClick={() => setTheme("light")}
            size={25}
            className="cursor-pointer"
          />
        ) : (
          <CiDark
            onClick={() => setTheme("dark")}
            size={25}
            className="cursor-pointer"
          />
        ))}
    </div>
  );
};

export default ThemeComp;
