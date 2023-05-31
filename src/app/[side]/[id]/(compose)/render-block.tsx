import React from "react";
import { PostSchema } from "@/services/posts/schema";

import { CodeBlock } from "./code-block";
import { CopyBtn } from "./copy-btn";

const Block = ({ block }: { block: Partial<PostSchema["blocks"][number]> }) => {
  const renderRichText = (richText?: {
    type: string;
    text?: {
      content: string;
      link: null;
    },
    mention?: {
      plain_text: string,
    },
    equation?: {
      expression: string
    }
  }[]) => {
    return richText?.map((text, index) => {
      switch (text.type) {
        case "text":
          return <span key={index}>{text?.text?.content}</span>;
        case "mention":
          return <span key={index}>@{text?.mention?.plain_text}</span>;
        case "equation":
          return <span key={index}>{text?.equation?.expression}</span>;
        default:
          return null;
      }
    });
  };

  switch (block?.type) {
    case "bookmark":
      return (
        <a href={block?.bookmark?.url}>Bookmark: {block?.bookmark?.url}</a>
      );

    case "bulleted_list_item":
      return (
        <ul className="flex flex-col mb-6">
          {block?.bulleted_list_item?.rich_text.map((text, index) => (
            <li key={index} className="mb-3">{String(text.text.content)}</li>
          ))}
        </ul>
      );

    case "callout":
      return (
        <div
          style={{
            backgroundColor: block?.callout?.color,
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          <span>{block?.callout?.icon.emoji}</span>
          <span>{renderRichText(block?.callout?.rich_text)}</span>
        </div>
      );

    case "code":
      return (
        <pre className="border border-app-alter-bg p-4 mb-8 rounded-lg relative">
          <CodeBlock language={String(block.code?.language)}>{block?.code?.rich_text[0].text.content}</CodeBlock>
          <CopyBtn content={block?.code?.rich_text[0].text.content as string} />
        </pre>
      );

    case "embed":
      return <iframe src={block?.embed?.url} title="Embedded Content"></iframe>;

    case "heading_1":
      return (
        <h1 className="text-2xl font-bold leading-10">
          {renderRichText(block?.heading_1?.rich_text)}
        </h1>
      );

    case "heading_2":
      return (
        <h2 className="text-xl font-bold leading-9">
          {renderRichText(block?.heading_2?.rich_text)}
        </h2>
      );

    case "heading_3":
      return (
        <h3 className="text-2xl font-bold leading-8">
          {renderRichText(block?.heading_3?.rich_text)}
        </h3>
      );

    case "image":
      return (
        <img
          src={block?.image?.external.url}
          alt="Block Image"
          style={{ width: "100%" }}
        />
      );

    case "numbered_list_item":
      return (
        <ol>
          {block?.numbered_list_item?.rich_text.map((text, index) => (
            <li key={index}>{text?.text.content}</li>
          ))}
        </ol>
      );

    case "paragraph":
      return (
        <p className="mt-2 mb-8 leading-8">
          {renderRichText(block?.paragraph?.rich_text)}
        </p>
      );

    default:
      return null;
  }
};

export default Block;
