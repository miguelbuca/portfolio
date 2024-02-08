"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import ThemeSwitch from "../ThemeSwitch";
import { nav } from "@/utils";
import { usePathname } from "next/navigation";
import { VscCode } from "react-icons/vsc";

import { create } from "zustand";
import HumbugerMenu from "../HumbugerMenu";

type Store = {
  active: string;
  setActive: (value: string) => void;
};

export const useHeaderStore = create<Store>()((set) => ({
  active: "",
  setActive: (value: string) => set(() => ({ active: value })),
}));

export const useHeaderState = () => {
  const pathname = usePathname();
  const { active, setActive } = useHeaderStore();

  const handlerLink = (url: string) => setActive(url);

  useEffect(() => {
    let url = "";
    if (pathname.includes("/articles")) url = "/articles";
    else if (pathname.includes("/projects")) url = "/projects";
    else url = pathname;

    window?.scrollTo?.({
      behavior: "smooth",
    });

    !active && setActive(url);
  }, [active, pathname, setActive]);

  return {
    active,
    handlerLink,
    pathname,
  };
};

export const Header = () => {
  const { active, handlerLink } = useHeaderState();
  return (
    <div className="grid grid-cols-3 items-center z-[99999] justify-center py-4 content-center h-12 top-4 left-0">
      <div className="flex flex-1 md:flex-auto items-center justify-start">
        <strong className="flex flex-row text-xs items-center">
          <span className="text-yellow-500 opacity-50 mr-1">
            <VscCode size={25} />
          </span>
          miguelbuca
        </strong>
      </div>
      <div className="flex md:flex items-center justify-center md:flex-1 h-full">
        <nav className="hidden flex-row md:flex bg-white dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.06] rounded-[100px]">
          <ul className="flex flex-row items-center justify-center px-1">
            {nav.map(({ name, href }, index) => (
              <li
                onClick={() => handlerLink(href)}
                className="flex p-[.5rem_.75rem]"
                key={index}
              >
                <Link href={href}>
                  <small
                    className={`flex-1 ${
                      active === href
                        ? "text-yellow-500"
                        : "hover:text-yellow-500"
                    } transition-all text-xs whitespace-nowrap`}
                  >
                    {name}
                  </small>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-end gap-x-2 md:gap-0">
        <ThemeSwitch />
        <div className="md:hidden flex">
          <HumbugerMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
