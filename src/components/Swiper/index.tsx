"use client";
import Image from "next/image";
import React, { useState } from "react";

export interface SwiperItem {
  name: string;
  logo: string;
  image: string;
  color: string;
  description: string;
  sector: string;
}

export interface SwiperProps {
  data: SwiperItem[];
}

export const useSwiperState = () => {
  const [active, setActive] = useState(0);
  const handleActive = (value: number) => setActive(value);
  return { active, handleActive };
};

export const Swiper = ({ data }: SwiperProps) => {
  const { active, handleActive } = useSwiperState();
  return (
    <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4 cursor-pointer">
      {data.map(({ name, color, logo, image, sector, description }, index) => (
        <div
          onClick={() => handleActive(index)}
          className={`flex overflow-hidden transition-all flex-col relative md:h-[600px] ${
            active === index
              ? "md:w-full rounded-[30px] md:rounded-[50px]"
              : "h-[80px] md:w-[80px] rounded-[100px] group"
          }`}
          style={{ backgroundColor: color }}
          key={index}
        >
          {active !== index ? (
            <>
              <div className="md:self-center h-full flex md:items-center md:justify-center">
                <h3 className="w-full flex items-center justify-center md:rotate-90 md:mr-3 text-[22px] ml-6 font-semibold whitespace-nowrap transition-all text-white">
                  {name}
                </h3>
              </div>
              <div className="flex items-center justify-center left-0 md:left-auto absolute self-center mx-2 md:mx-5 bottom-[7px] h-16 w-16 bg-white rounded-full">
                <Image
                  className="rounded-full"
                  src={logo}
                  alt={name}
                  width={50}
                  height={50}
                />
              </div>
            </>
          ) : (
            <div className="flex flex-col md:flex-row [&_>*]:p-2 md:[&_>*]:p-6 text-white">
              <div className="flex flex-col flex-1 gap-y-5">
                <div className="flex flex-row items-center">
                  <div className="flex items-center justify-center md:mx-5 mr-5 h-16 w-16 bg-white rounded-full">
                    <Image
                      className="rounded-full"
                      src={logo}
                      alt={name}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col">
                    <strong className="text-2xl">{name}</strong>
                    <small className="opacity-40 text-xs">{sector}</small>
                  </div>
                </div>
                <div className="flex-1 flex items-center">
                  <div className="p-6">
                    <pre className="opacity-70 italic text-xs whitespace-pre-wrap">{description}</pre>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  className="md:h-[580px] md:w-[300px] -mt-3"
                  src={image}
                  height={400}
                  width={180}
                  alt={name}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
