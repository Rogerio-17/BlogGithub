import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { useEffect } from "react";
import { marked } from "marked";
import { MarkedownContainer } from "./style";

interface MarkdownProps {
  markdown: string
}

export function Markedown({markdown}: MarkdownProps) {
  console.log(markdown)
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <MarkedownContainer className="App">
      {/* Example with marked */}
      <div dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
    </MarkedownContainer>
  );
}
