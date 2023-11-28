import { IPost } from "../..";
import { relativeDateFormatter } from "../../../../utils/formateDateMoment";
import { PostContainer } from "./style";

interface PostProps {
    post: IPost
}

export function Post({post}: PostProps) {
    const dateDistance = relativeDateFormatter(post.created_at)

    return(
        <PostContainer to={`postdetails/${post.number}`}>
            <div>
              <h2>{post.title}</h2>
              <span>{dateDistance}</span>
            </div>

            <p>
                {post.body}
            </p>
        </PostContainer>
    )
}