import { InformationField, ProfileContent } from "./style";
import UserImg from "../../../../assets/User.jpeg"
import { IconDescription } from "../../../../components/IconAndDescription";
import { ArrowSquareOut } from "phosphor-react";

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
                     <IconDescription/>
                     <IconDescription/>
                     <IconDescription/>
                </footer>
            </InformationField>
        </ProfileContent>
    )
}