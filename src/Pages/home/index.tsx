import { useEffect, useState } from "react";
import { Profile } from "../../components/Profile";
import { Post } from "./components/Post";
import { Search } from "./components/Search";
import { HomeContainer, PostsContainer } from "./style";
import axios from "axios";

export function Home() {
  const [personalInformation, setPersonalInformation] = useState({});

  const apiUrl = "https://api.github.com";
  const username = "Rogerio-17";
  const endpoint = `/users/${username}`;

  useEffect(() => {
    axios.get(`${apiUrl}${endpoint}`).then((response) => {
      setPersonalInformation(response.data);
    });
  }, []);

  console.log(personalInformation);

  return (
    <HomeContainer>
      <Profile />

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
