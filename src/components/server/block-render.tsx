import React from "react";
import { PostSchema } from "@/services/posts/schema";
import { CodeBlock } from "../client/code-block";
import { renderRichText } from "./render-rich-text";
import { Text } from "../ui/common/text";

const BlockRender = ({ block, last }: { block: Partial<PostSchema["blocks"][number]>, last?: boolean }) => {
  switch (block?.type) {
    case "code":
      return <CodeBlock language={block.code?.language} code={renderRichText(block.code as any)} />

    case "embed":
      return <iframe src={block?.embed?.url} title="Embedded Content"></iframe>;

    case "heading_1":
      return <Text type="h1">{renderRichText(block?.heading_1)}</Text>

    case "heading_2":
      return <Text type="h2" className="mb-2">{renderRichText(block?.heading_2)}</Text>

    case "heading_3":
      return <Text type="h3">{renderRichText(block?.heading_3)}</Text>

    case "paragraph":
      return <Text type="p" className="mb-8 leading-relaxed">{renderRichText(block?.paragraph)}</Text>


    case "image":
      return (
        <img
          src={block?.image?.external.url}
          alt="Block Image"
          style={{ width: "100%" }}
        />
      );

    case "bulleted_list_item":

      return (
        <ul className={`flex flex-col pl-4 ${last === true ? "mb-6" : "mb-2"} list-disc`}>
          {block?.bulleted_list_item?.rich_text.map((text, index) => (
            <li key={index}>{text?.text.content}</li>
          ))}
        </ul>
      );


    case "numbered_list_item":
      return (
        <ol>
          {block?.numbered_list_item?.rich_text.map((text, index) => (
            <li key={index}>{text?.text.content}</li>
          ))}
        </ol>
      );

    default:
      return null;
  }
};

export { BlockRender };
