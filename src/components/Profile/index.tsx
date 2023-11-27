import { InformationField, ProfileContent } from "./style";
import { IconDescription } from "../IconAndDescription";
import { ArrowSquareOut } from "phosphor-react";

import gitImage from "../../assets/Vector/Git.svg"
import companny from "../../assets/Vector/company.svg"
import peoples from "../../assets/Vector/Users.svg"
import { ApiGithubFormated } from "../../Pages/home";

export function Profile({name, bio, company, followers, login, urlImage}:ApiGithubFormated) {
    return(
        <ProfileContent>
            <img src={urlImage} alt="" />

            <InformationField>
                <div>
                  <h2>{name}</h2>
                  <a href="">Github <ArrowSquareOut size={18}/> </a>
                </div>

                <p>{bio}</p>

                <footer>
                     <IconDescription imgUrl={gitImage} content={login}/>
                     <IconDescription imgUrl={companny} content={company}/>
                     <IconDescription imgUrl={peoples} content={`${followers} seguidores`}/>

                </footer>
            </InformationField>
        </ProfileContent>
    )
}