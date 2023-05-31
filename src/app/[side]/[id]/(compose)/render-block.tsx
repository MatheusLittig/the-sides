import { PostSchema } from "@/services/posts/schema";
import React from "react";

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
        <ul>
          {block?.bulleted_list_item?.rich_text.map((text, index) => (
            <li key={index}>{text.text.content}</li>
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
        <pre>
          <code>{block?.code?.rich_text[0].text.content}</code>
        </pre>
      );

    case "embed":
      return <iframe src={block?.embed?.url} title="Embedded Content"></iframe>;

    case "heading_1":
      return (
        <h1 style={{ color: block?.heading_1?.color }}>
          {renderRichText(block?.heading_1?.rich_text)}
        </h1>
      );

    case "heading_2":
      return (
        <h2 style={{ color: block?.heading_2?.color }}>
          {renderRichText(block?.heading_2?.rich_text)}
        </h2>
      );

    case "heading_3":
      return (
        <h3 style={{ color: block?.heading_3?.color }}>
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
        <p style={{ color: block?.paragraph?.color }}>
          {renderRichText(block?.paragraph?.rich_text)}
        </p>
      );

    default:
      return null;
  }
};

export default Block;
