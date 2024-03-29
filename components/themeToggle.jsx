"use client"

import { useTheme } from "next-themes"
import { IoSunny, IoMoon } from "react-icons/io5";
// import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button
   
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className='flex px-3 py-3 rounded-[100%] dark:text-white text-[#3f434a] text-2xl hover:bg-[#3f434a] hover:text-white dark:hover:bg-green-500 dark:bg-[#181B1F] sm:bg-transparent bg-white dark:sm:bg-transparent  dark:hover:text-[#3f434a]  bg-background'    >
      <IoSunny className="rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
      <IoMoon className="absolute rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
