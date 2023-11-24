import { InformationField, ProfileContent } from "./style";
import UserImg from "../../assets/User.jpeg"
import { IconDescription } from "../IconAndDescription";
import { ArrowSquareOut } from "phosphor-react";

import gitImage from "../../assets/Vector/Git.svg"
import companny from "../../assets/Vector/company.svg"
import peoples from "../../assets/Vector/Users.svg"

export function Profile() {
    return(
        <ProfileContent>
            <img src={UserImg} alt="" />

            <InformationField>
                <div>
                  <h2>Rogerio José</h2>
                  <a href="">Github <ArrowSquareOut size={18}/> </a>
                </div>

                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

                <footer>
                     <IconDescription imgUrl={gitImage} content="Rogerio-17"/>
                     <IconDescription imgUrl={companny} content="Brisanet Telecomunicações"/>
                     <IconDescription imgUrl={peoples} content={`11 seguidores`}/>

                </footer>
            </InformationField>
        </ProfileContent>
    )
}