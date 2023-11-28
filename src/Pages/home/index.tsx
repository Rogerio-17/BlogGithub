import { Profile } from "./components/Profile"; 
import { Post } from "./components/Post";
import { Search } from "./components/Search";
import { HomeContainer, PostsContainer } from "./style";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Spinner } from "../../components/Spinner";

const userName = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export interface IPost {
  title: string,
  body: string,
  created_at: string,
  number: number,
  html_url: string,
  coments: number;
  user: {
    login: string;
  }
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true)
  const qunatityPosts = posts.length


   const getPosts = useCallback( async(query: string = '') => {
    try {
      setIsLoading(true)
      const response = await api.get(`/search/issues?q=${query}%20repo:${userName}/${repoName}`)
      setPosts(response.data.items)
    } finally{
      setIsLoading(false)
    }
  }, [posts])


  useEffect(() => {
    getPosts()
  }, [])

  return (
    <HomeContainer>
      <Profile />

      <Search qunatityPosts={qunatityPosts} getPosts={getPosts}/>

      {posts.length === 0 && !isLoading && <p>Nenhum post disponível</p>}

      <PostsContainer>
        {
          isLoading ? <Spinner></Spinner> : (
            posts.map((post) => (
              <Post key={post.number} post={post}/>
            ))
          )
        }
      </PostsContainer>
    </HomeContainer>
  );
}
