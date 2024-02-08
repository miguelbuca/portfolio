"use client";
import React from "react";
import { BiMenu } from "react-icons/bi";

const HumbugerMenu = () => {
  return (
    <div className="flex items-center bg-white dark:bg-white/[0.06] justify-center border border-black/[0.06] dark:border-white/[0.06] rounded-full *:cursor-pointer h-10 w-10">
      <BiMenu size={20} />
    </div>
  );
};

export default HumbugerMenu;
