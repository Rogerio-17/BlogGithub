import { useCallback, useEffect, useState } from "react";
import { Markedown } from "./Markdown";
import { PostInfo } from "./postInfo";
import { DescriptionContent, PostDetailsContainer } from "./style";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { Spinner } from "../../components/Spinner";

const userName = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

interface PostSelectedApi {
    title: string;
    created_at: string;
    comments: number;
    body: string;
    html_url: string;
}

export interface Post {
  post: PostSelectedApi
}


export function PostDetails() {

  const [postSelected, setPostSelected] = useState({} as PostSelectedApi);
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

   const getPost = useCallback( async() => {
    try {
      setIsLoading(true)
      const response = await api.get(`/repos/${userName}/${repoName}/issues/${id}`)
      setPostSelected(response.data)      
    } finally{
      setIsLoading(false)
    }
    
  }, [postSelected])

  useEffect(() => {
    getPost()
  }, [])


  return (
    <PostDetailsContainer>
      {
        isLoading ? <Spinner></Spinner> : (
          <>
              <PostInfo PostInfoPros={postSelected} login={userName}/>

            <DescriptionContent>
              <Markedown markdown={postSelected.body}/>
            </DescriptionContent>
          </>
        )
      }
    </PostDetailsContainer>
  );
}
