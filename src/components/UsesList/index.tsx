"use client";
import { fetchData } from "@/utils";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
import { useHeaderStore } from "..";

export interface UsesListItem {
  title: string;
  content: ReactNode;
  link?: string;
}

export interface UsesListProps {
  data: UsesListItem[];
}
export const useUsesListState = (data: UsesListItem[]) => {
  const [result, setResult] = useState<typeof data>([]);
  const { setActive } = useHeaderStore();

  useEffect(() => {
    const res = fetchData<UsesListItem>(data, {
      limit: 4,
    });
    setResult(res.data);
  }, [data]);

  const handlerLink = (url: string) => setActive(url);

  return { result, handlerLink };
};

export const UsesList = ({ data }: UsesListProps) => {
  const { result, handlerLink } = useUsesListState(data);
  return (
    <div className={`relative flex flex-col gap-y-8 md:max-w-max  md:w-full`}>
      {result.map(({ title, content, link }, index) =>
        link ? (
          <>
            <Link
              onClick={() => handlerLink("/articles")}
              href={link ?? ""}
              key={index}
            >
              <div className="p-6 rounded-2xl hover:bg-black/[0.06] hover:dark:bg-white/[0.06]">
                <div>
                  <span className="line-clamp-3 font-semibold">{title}</span>
                </div>
                <div className="my-4">
                  <p className="text-sm opacity-60">{content}</p>
                </div>
              </div>
            </Link>
          </>
        ) : (
          <div
            key={index}
            className="p-6 rounded-2xl"
          >
            <div>
              <span className="line-clamp-3 font-semibold">{title}</span>
            </div>
            <div className="my-4">
              <p className="text-sm opacity-60">{content}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};
