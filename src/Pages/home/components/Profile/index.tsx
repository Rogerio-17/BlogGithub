import { InformationField, ProfileContent } from "./style";
import { IconDescription } from "../../../../components/IconAndDescription";
import { ArrowSquareOut, Target } from "phosphor-react";

import gitImage from "../../../../assets/Vector/Git.svg"
import companny from "../../../../assets/Vector/company.svg"
import peoples from "../../../../assets/Vector/Users.svg"
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { Spinner } from "../../../../components/Spinner";

export interface ApiGithubFormated {
    name: string,
    bio: string,
    login: string,
    company: string,
    followers: number,
    avatar_url: string,
    gitHub: string,
  } 

const userName = import.meta.env.VITE_GITHUB_USERNAME


export function Profile() {

  const [personalInformation, setPersonalInformation] = useState<ApiGithubFormated>();
  const [isLoading, setIsLoading] = useState(true)

   const getInformationGithub = useCallback( async() => {
    try {
      setIsLoading(true)
      const response = await api.get(`/users/${userName}`)
      setPersonalInformation(response.data)      
    } finally{
      setIsLoading(false)
    }
    
  }, [personalInformation])

  useEffect(() => {
    getInformationGithub()
  }, [])

  console.log(personalInformation)

    return(
        <ProfileContent>
          {
            isLoading ? <Spinner></Spinner> : (
              <>
               <img src={personalInformation?.avatar_url} alt="" />

                <InformationField>
                 <div>
                  <h2>{personalInformation?.name}</h2>
                  <a href={personalInformation?.gitHub} target="_blank">Github <ArrowSquareOut size={18}/> </a>
                 </div>

                  <p>{personalInformation?.bio}</p>

                  <footer>
                   <IconDescription imgUrl={gitImage} content={personalInformation?.login}/>
                   <IconDescription imgUrl={companny} content={personalInformation?.company}/>
                   <IconDescription imgUrl={peoples} content={`${personalInformation?.followers} seguidores`}/>

                  </footer>
                </InformationField>
              </>
            )
          }
        </ProfileContent>
    )
}