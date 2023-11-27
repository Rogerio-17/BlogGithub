import { useEffect, useState } from "react";
import { Profile } from "../../components/Profile";
import { Post } from "./components/Post";
import { Search } from "./components/Search";
import { HomeContainer, PostsContainer } from "./style";
import axios from "axios";

export interface ApiGithubFormated {
  name?: string,
  bio?: string,
  login?: string,
  company?: string,
  followers?: number,
  urlImage?: string,
} 


export function Home() {
  const [personalInformation, setPersonalInformation] = useState<ApiGithubFormated>();

  const apiUrl = "https://api.github.com";
  const username = "Rogerio-17";
  const endpoint = `/users/${username}`;

  useEffect(() => {
    axios.get(`${apiUrl}${endpoint}`).then((response) => {
      const informations: ApiGithubFormated = {
        name: response.data.name,
        bio: response.data.bio,
        login: response.data.login,
        company: response.data.company,
        followers: response.data.followers,
        urlImage: response.data.avatar_url
      }

      setPersonalInformation(informations)
    });
  }, []);

  return (
    <HomeContainer>
      <Profile 
      name={personalInformation?.name}
      bio={personalInformation?.bio}
      company={personalInformation?.company}
      followers={personalInformation?.followers}
      login={personalInformation?.login}
      urlImage={personalInformation?.urlImage}
      />

      <Search />

      <PostsContainer>
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsContainer>
    </HomeContainer>
  );
}
