import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const About = () => {
  return (
    <div className="container py-6 flex-col">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-x-4">
        <div className="my-24 w-full">
          <h1 className="text-4xl font-bold leading-10">
            I’m Miguel Buca. I live in Luanda, where I build the next level.
          </h1>
          <p className="opacity-60 mt-4">
            {`Since 2013, I've been captivated by the ever-evolving world of technology, and my fascination has only grown stronger over time. In 2016, I embarked on my programming journey by undertaking the Java course provided by the esteemed University XTI. This marked the genesis of my programming odyssey, and since then, I haven't looked back.

With a diverse background in various programming languages, I found my niche in mobile development around 2019. Today, I proudly serve as the co-founder and CTO of Biscato, a groundbreaking startup dedicated to connecting temporary workers, known as "Biscateiros," with individuals in need of assistance, particularly in household tasks.

My journey thus far has been a blend of continuous learning, challenging experiences, and an unwavering passion for crafting technological solutions that positively impact people's lives. I am committed to relentlessly pursuing new challenges and opportunities to innovate and make a difference in the realm of technology.`}
          </p>
        </div>
        <div className="flex items-center justify-center my-12 md:my-24 w-full">
          <img
            className="rounded-xl rotate-6 w-[300px] md:w-[300px]"
            src={"/assets/img/miguelbuca.jpeg"}
            alt="miguelbuca"
          />
        </div>
      </div>
      <div className="flex md:items-center md:justify-center my-6">
        <div className="grid grid-rows-4 md:grid-cols-4 gap-4 text-sm whitespace-nowrap">
          <Link
            href={"https://www.linkedin.com/in/miguelbuca/"}
            target="_blank"
          >
            <span className="flex flex-row items-center [&_>*]:cursor-pointer hover:text-yellow-500 transition-all">
              <FaLinkedin />
              <label className="ml-2">LinkedIn</label>
            </span>
          </Link>
          <Link
            href={"https://www.instagram.com/miguelbuca.tech/"}
            target="_blank"
          >
            <span className="flex flex-row items-center [&_>*]:cursor-pointer hover:text-yellow-500 transition-all">
              <FaInstagram />
              <label className="ml-2">Instagram</label>
            </span>
          </Link>
          <Link href={"https://github.com/miguelbuca"} target="_blank">
            <span className="flex flex-row items-center [&_>*]:cursor-pointer hover:text-yellow-500 transition-all">
              <FaGithub />
              <label className="ml-2">GitHub</label>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
