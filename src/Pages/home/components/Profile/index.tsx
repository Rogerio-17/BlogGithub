import { InformationField, ProfileContent } from "./style";
import { IconDescription } from "../../../../components/IconAndDescription";
import { ArrowSquareOut } from "phosphor-react";

import gitImage from "../../../../assets/Vector/Git.svg"
import companny from "../../../../assets/Vector/company.svg"
import peoples from "../../../../assets/Vector/Users.svg"
import { useEffect, useState } from "react";
import axios from "axios";

export interface ApiGithubFormated {
    name?: string,
    bio?: string,
    login?: string,
    company?: string,
    followers?: number,
    urlImage?: string,
  } 


export function Profile() {
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

    return(
        <ProfileContent>
            <img src={personalInformation?.urlImage} alt="" />

            <InformationField>
                <div>
                  <h2>{personalInformation?.name}</h2>
                  <a href="">Github <ArrowSquareOut size={18}/> </a>
                </div>

                <p>{personalInformation?.bio}</p>

                <footer>
                     <IconDescription imgUrl={gitImage} content={personalInformation?.login}/>
                     <IconDescription imgUrl={companny} content={personalInformation?.company}/>
                     <IconDescription imgUrl={peoples} content={`${personalInformation?.followers} seguidores`}/>

                </footer>
            </InformationField>
        </ProfileContent>
    )
}