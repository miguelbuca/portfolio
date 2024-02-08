import { UsesList } from "@/components";
import { uses } from "@/storage";
import React from "react";

const Uses = () => {
  return (
    <div className="container py-6">
      <div className="my-24 md:max-w-[60%] w-full">
        <h1 className="text-4xl font-bold leading-10">
          Software I use, gadgets I love, and other things I recommend.
        </h1>
        <p className="opacity-60 mt-4">
          I get asked a lot about the things I use to build software, stay
          productive, or buy to fool myself into thinking I’m being productive
          when I’m really just procrastinating. Here’s a big list of all of my
          favorite stuff.
        </p>
      </div>
      {uses.map((item, index) => (
        <div className="md:mt-0 my-24" key={index}>
          <div className="relative md:border-l border-black/[0.06] dark:border-white/[0.06]">
            <div className="flex flex-col md:grid md:grid-cols-[200px_1fr]">
              <span className="mx-6 py-6 text-xs font-bold md:font-normal border-b md:border-b-0 border-black/[0.06] dark:border-white/[0.06] mb-4 md:mb-0 text-black/[0.5] dark:text-white/[0.5]">
                {item.section}
              </span>
              <UsesList data={item.data} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Uses;
