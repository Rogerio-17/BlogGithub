import { Profile } from "../../components/Profile";
import { Post } from "./components/Post";
import { Search } from "./components/Search";
import { HomeContainer, PostsContainer } from "./style";

export function Home() {
    return(
        <HomeContainer>
            <Profile/>

            <Search/>

            <PostsContainer>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
            </PostsContainer>
        </HomeContainer>
    )
}