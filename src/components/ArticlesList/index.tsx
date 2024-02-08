"use client";
import { fetchData } from "@/utils";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useHeaderStore } from "..";

export interface ArticleItem {
  id: number | string;
  title: string;
  content: ReactNode;
  publishIn: string;
}

export interface ArticlesListProps {
  data: ArticleItem[];
  isFull?: boolean;
  withDate?: boolean;
}
export const useArticlesListState = (data: ArticleItem[]) => {
  const [result, setResult] = useState<typeof data>([]);
  const { setActive } = useHeaderStore();

  useEffect(() => {
    const res = fetchData<ArticleItem>(data, {
      limit: 4,
    });
    setResult(res.data);
  }, [data]);

  const handlerLink = (url: string) => setActive(url);

  return { result, handlerLink };
};

export const ArticlesList = ({ data, isFull, withDate }: ArticlesListProps) => {
  const { result, handlerLink } = useArticlesListState(data);
  return (
    <div
      className={`relative ${withDate ? 'md:border-l border-black/[0.06] dark:border-white/[0.06]' : ''} flex flex-col md:items-center gap-y-8${
        !isFull ? "md:max-w-[700px]  md:w-[85%] " : "md:max-w-max  md:w-full"
      }`}
    >
      {result.map(({ title, content, id, publishIn }, index) => (
        <div className="flex flex-col md:flex-row" key={index}>
          {withDate && (
            <div className="flex mx-6 mb-4 md:mb-0 opacity-60 whitespace-nowrap">
              <small className="py-6">
                {new Date(publishIn).toLocaleDateString("en-US", {
                  month: "long",
                  day: "2-digit",
                  year: "numeric",
                })}
              </small>
            </div>
          )}
          <Link
            onClick={() => handlerLink("/articles")}
            href={"/articles/" + id}
            key={index}
          >
            <div className="p-6 rounded-2xl hover:bg-black/[0.06] hover:dark:bg-white/[0.06]">
              <div>
                <span className="line-clamp-1 font-semibold">{title}</span>
              </div>
              <div className="my-4">
                <p className="line-clamp-4 text-sm opacity-60">{content}</p>
              </div>
              <div>
                <span className="flex flex-row items-center text-yellow-500 font-semibold text-xs">
                  Read article
                  <span className="ml-1">
                    <FaChevronRight size={10} />
                  </span>
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
