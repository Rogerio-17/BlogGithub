
import gitImage from "../../assets/Vector/Vector.svg"
import { IconDescriptionProps } from "./style"

export function IconDescription(){
    return(
        <IconDescriptionProps>
            <img src={gitImage} alt="" />
            <span>Rogerio-17</span>
        </IconDescriptionProps>
    )
}