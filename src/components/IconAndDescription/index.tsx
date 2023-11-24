import { IconDescriptionProps } from "./style"

interface IconDescriptionProps {
    imgUrl: string,
    content: string
}

export function IconDescription({imgUrl, content}:IconDescriptionProps){
    return(
        <IconDescriptionProps>
            <img src={imgUrl} alt="" />
            <span>{content}</span>
        </IconDescriptionProps>
    )
}