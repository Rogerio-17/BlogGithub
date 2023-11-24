import { ArrowSquareOut, ArrowUDownLeft } from "phosphor-react";
import { IconDescription } from "../../../components/IconAndDescription";
import { Information, PostInfoContent } from "./style";

import gitImage from "../../../assets/Vector/Git.svg"
import calendar from "../../../assets/Vector/calendar.svg"
import comment from "../../../assets/Vector/comment.svg"

interface PostInfo {
    title: string,
    name: string,
    date: string,
    comment: number
}

interface PostInfoProps {
    PostInfoPros: PostInfo
}


export function PostInfo({PostInfoPros}:PostInfoProps) {
    return(
        <PostInfoContent>
            <Information>
                <div>
                  <a href=""><ArrowUDownLeft size={18}/> Voltar</a>
                  <a href=""> Ver no github <ArrowSquareOut size={18}/> </a>
                </div>
                <h2>{PostInfoPros.title}</h2>
                <footer>
                     <IconDescription imgUrl={gitImage} content={PostInfoPros.name}/>
                     <IconDescription imgUrl={calendar} content={`Há ${PostInfoPros.date} dia`}/>
                     <IconDescription imgUrl={comment} content={`${PostInfoPros.comment} seguidores`}/>

                </footer>
            </Information>
        </PostInfoContent>
    )
}