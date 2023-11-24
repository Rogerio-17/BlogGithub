import { PostInfo } from "./postInfo";
import { PostDetailsContainer } from "./style";

export function PostDetails() {
    const InformationGit = {
        title: "JavaScript data types and data structures",
        name: "Rogerio-17",
        date: '2',
        comment: 5
    }

    return(
        <PostDetailsContainer>
            <PostInfo PostInfoPros={InformationGit}/>
        </PostDetailsContainer>
    )
}