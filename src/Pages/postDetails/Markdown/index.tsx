import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { useEffect } from "react";
import { marked } from "marked";
import { MarkedownContainer } from "./style";

export function Markedown() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const markdown = `
  \`\`\`typescript
  let foo = 42;   // foo is now a number
  foo = ‘bar’;    // foo is now a string
  foo = true;     // foo is now a boolean
  \`\`\`
`;

  return (
    <MarkedownContainer className="App">
      {/* Example with marked */}
      <div dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
    </MarkedownContainer>
  );
}
