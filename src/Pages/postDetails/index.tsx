import { Markedown } from "./Markdown";
import { PostInfo } from "./postInfo";
import { DescriptionContent, PostDetailsContainer } from "./style";


export function PostDetails() {
  const InformationGit = {
    title: "JavaScript data types and data structures",
    name: "Rogerio-17",
    date: "2",
    comment: 5,
  };


  return (
    <PostDetailsContainer>
      <PostInfo PostInfoPros={InformationGit} />

      <DescriptionContent>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>

        <a>Dynamic typing</a>

        <p>
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </p>

        <Markedown></Markedown>
      </DescriptionContent>
    
    </PostDetailsContainer>
  );
}
