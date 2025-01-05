import { useState } from "react";

type TextTruncateProps = {
  text: string;
  maxLength: number;
};

export default function TextTruncate({ text, maxLength }: TextTruncateProps) {
  const [showMore, setShowMore] = useState(false);

  const truncatedText = text.length > maxLength ? text.substring(0, maxLength) + " ..." : text;

  return (
    <button
      onClick={() => setShowMore(!showMore)}
      style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
      <p>
        {showMore ? text : truncatedText}
        {text.length > maxLength && (
          <span style={{ color: "blue", cursor: "pointer" }}>
            {showMore ? "Show Less" : "Show More"}
          </span>
        )}
      </p>
    </button>
  );
}
