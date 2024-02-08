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
            {`I have always loved creating things, as far as I can remember, and I
            wrote my first program when I was 12 years old. I was a kid who
            really enjoyed playing Minecraft, so that's how I started
            programming server plugins using Java. The only thing I like more
            than computers is traveling. I love to see new places around the
            world, to have insane experiences or calmer ones, like parachute
            jumping or visiting a nice restaurant. Cold places enchant me, but
            warm places also have their place in my heart. Besides computers and
            traveling, I am passionate about the feeling of entrepreneurship. I
            love the challenges I had to face (and still face today) in some of
            the opportunities I had. Today, I am one of the co-founders & CTO of
            Vain, a platform that aims to simplify the provision and use of
            aesthetic services in Brazil.`}
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
