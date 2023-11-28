import { ArrowSquareOut, ArrowUDownLeft } from "phosphor-react";
import { IconDescription } from "../../../components/IconAndDescription";
import { Information, PostInfoContent } from "./style";

import gitImage from "../../../assets/Vector/Git.svg"
import calendar from "../../../assets/Vector/calendar.svg"
import comment from "../../../assets/Vector/comment.svg"
import { relativeDateFormatter } from "../../../utils/formateDateMoment";
import { Link } from "react-router-dom";


interface PostInfo {
    title: string;
    created_at: string;
    comments: number;
    body: string;
    html_url: string;
}

interface PostInfoProps {
    PostInfoPros: PostInfo;
    login: string;
}


export function PostInfo({PostInfoPros, login}:PostInfoProps) {
    const dateFormated = relativeDateFormatter(PostInfoPros.created_at)

    return(
        <PostInfoContent>
            <Information>
                <div>
                  <Link to="/"><ArrowUDownLeft size={18}/> Voltar</Link>
                  <a href={PostInfoPros.html_url} target="_blank"> Ver no github <ArrowSquareOut size={18}/> </a>
                </div>
                <h2>{PostInfoPros.title}</h2>
                <footer>
                     <IconDescription imgUrl={gitImage} content={login}/>
                     <IconDescription imgUrl={calendar} content={dateFormated}/>
                     <IconDescription imgUrl={comment} content={`${PostInfoPros.comments} comentários`}/>

                </footer>
            </Information>
        </PostInfoContent>
    )
}