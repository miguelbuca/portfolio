"use client";
import React, { useEffect, useState } from "react";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import lua from "react-syntax-highlighter/dist/cjs/languages/prism/lua";
import php from "react-syntax-highlighter/dist/cjs/languages/prism/php";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import axios from "axios";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("ts", typescript);
SyntaxHighlighter.registerLanguage("lua", lua);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);

SyntaxHighlighter.registerLanguage("php", php);

type CodeProps = {
  className: string;
  children: string;
};

type ArticleProps = { params: { slug: string } };

const Code = ({ className, children }: CodeProps) => {
  return (
    <SyntaxHighlighter
      customStyle={{
        fontSize: 12,
        borderRadius: 30,
        padding: 40,
      }}
      language={className.split("-")[1]}
      style={oneDark}
    >
      {children}
    </SyntaxHighlighter>
  );
};

const Article = ({ params }: ArticleProps) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    axios.get(`/api?file=${params.slug}`).then(({ data }) => setMarkdown(data));
  }, [params.slug]);

  return (
    <div className="container pb-16 mt-24">
      <pre className="[&_p]:whitespace-normal font-sans [&_p]:font-normal [&_h1]:whitespace-normal [&_h1]:text-2xl [&_table]:table-auto [&_table]:border-collapse [&_table_*]:border [&_table_*]:p-1 [&_table_*]:border-black/[0.06] [&_table_*]:dark:border-white/[0.06] [&_a]:text-blue-500  [&_h1]:mb-3 [&_li]:text-sm [&_p]:text-sm [&_li]:opacity-60 [&_p]:opacity-60 [&_ul]:leading-3  [&_li]:whitespace-normal [&_ul]:list-none">
        <ReactMarkdown
          components={{
            code: Code as unknown as keyof JSX.IntrinsicElements,
          }}
          remarkPlugins={[remarkGfm]}
        >
          {markdown}
        </ReactMarkdown>
      </pre>
    </div>
  );
};

export default Article;
