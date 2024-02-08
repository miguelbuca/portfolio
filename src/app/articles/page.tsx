import { ArticlesList } from "@/components";
import { articles } from "@/storage";
import React from "react";

const Articles = () => {
  return (
    <div className="container py-6">
      <div className="my-24 md:max-w-[60%] w-full">
        <h1 className="text-4xl font-bold leading-10">
          Writing on software engineering, company building, and scaling
          applications.
        </h1>
        <p className="opacity-60 mt-4">
          All of my long-form thoughts on programming, leadership, product
          design, and more, collected in chronological order.
        </p>
      </div>
      <div className="md:mt-0 my-24">
        <ArticlesList withDate isFull data={articles} />
      </div>
    </div>
  );
};

export default Articles;
