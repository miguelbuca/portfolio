import React from "react";
import { ArticlesList, Avatar, Swiper } from "@/components";
import { articles, projects, works } from "@/storage";
import Image from "next/image";
import { FaAndroid, FaApple, FaArrowDown, FaBriefcase } from "react-icons/fa6";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col py-6 gap-y-12">
      <section className="container mb-14 md:mb-0 md:grid flex flex-col-reverse md:grid-cols-2 items-center *:flex-1 min-h-[600px]">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-4xl font-bold">
            Mobile Developer specializing in React Native
          </h1>
          <p className="opacity-60">
            Over the past{" "}
            <span className="px-1 rounded-md bg-black/10 dark:bg-white/10">
              {new Date().getFullYear() - 2019} years
            </span>{" "}
            as a developer, I have worked with mid-sized companies and
            up-and-coming startups to help them reach their full potential and
            attract new customers.
          </p>
          <div className="flex mt-4 flex-row gap-5 items-center">
            <div>
              <Link href={"https://cal.com/miguel-buca"} target="_blank">
                <button className="border-2 border-yellow-500 rounded-[100px] p-[0.5rem_0.75rem] text-yellow-500 font-semibold">
                  {"I'm looking for new challenges 👋🏻"}
                </button>
              </Link>
            </div>
            <div className="flex flex-row items-center gap-x-5">
              <Link title="GitHub" href={"https://github.com/miguelbuca"}>
                <FaGithubAlt size={20} target="_blank" />
              </Link>
              <Link title="LinkedIn" href={"https://www.linkedin.com/in/miguelbuca/"} target="_blank">
                <FaLinkedinIn size={18} />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative group cursor-pointer my-14 md:my-0 scale-75 md:scale-100">
            <div className="absolute group-hover:animate-[spin_3s_ease-in-out_infinite] lezy-spin  w-full h-full rounded-full bg-gradient-to-r from-pink-500 from-10% via-yellow-500 via-30% to-emerald-500 to-90%" />
            <Avatar
              className="rounded-full  z-10 border-[5px] m-1 dark:border-dark-primary border-light-primary"
              height={290}
              width={290}
            />
            <div className="absolute text-pink-500  bottom-5 left-5 size-10 flex items-center justify-center rounded-full dark:bg-dark-primary bg-light-primary z-20">
              <FaApple size={20} />
            </div>
            <div className="absolute text-emerald-500 top-5 right-5 size-10 flex items-center justify-center rounded-full dark:bg-dark-primary bg-light-primary z-20">
              <FaAndroid size={20} />
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="container flex flex-col gap-y-4">
        <div className="flex flex-col mb-6">
          <h4 className="text-3xl mt-4 mb-2">Latest Projects</h4>
          <small className="opacity-50">
            Things I’ve made trying to put my dent in the universe.
          </small>
        </div>
        <div>
          <Swiper data={projects} />
        </div>
      </section>
      <section
        id="articles"
        className="container flex flex-col gap-y-4 pt-12 mb-16"
      >
        <div className="flex flex-col-reverse md:grid md:grid-cols-[4fr_3fr] gap-x-16">
          <div>
            <div className="mt-16 md:mt-0">
              <ArticlesList data={articles} />
            </div>
          </div>
          <div className="flex flex-col p-4 border rounded-2xl border-black/[0.06] dark:border-white/[0.06] h-fit">
            <div className="flex flex-row items-center my-6">
              <span className="opacity-10 dark:opacity-30 mr-3">
                <FaBriefcase size={18} />
              </span>
              <span>
                <small className="text-sm font-medium">Work</small>
              </span>
            </div>
            <div>
              <ul>
                {works.map(
                  ({ logo, title, company, startedAt, finishedAt }, index) => (
                    <li className="my-3" key={index}>
                      <div className="grid gap-x-3 grid-cols-[50px_1fr_auto] text-xs">
                        <div>
                          <Image
                            className="rounded-full border border-black/[0.06] dark:border-white/[0.06]"
                            src={logo}
                            height={40}
                            width={40}
                            alt={company}
                          />
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <span className="line-clamp-1">{company}</span>
                          </div>
                          <div>
                            <small className="opacity-50">{title}</small>
                          </div>
                        </div>
                        <div className="flex items-center justify-center">
                          <div>
                            <small className="opacity-50">{`${startedAt} - ${finishedAt}`}</small>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="mt-6">
              <button className="flex items-center cursor-pointer justify-center w-full p-[.7rem_.75rem] rounded-2xl bg-black/[0.06] dark:bg-white/[0.06]">
                <span className="mr-2">Download CV</span>
                <span className="opacity-50">
                  <FaArrowDown />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
