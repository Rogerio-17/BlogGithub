import { SeachContent } from "./style";
import * as z from 'zod';
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"


const seacrhFormSchema = z.object({
    query: z.string()
})

type SearchFormInput = z.infer<typeof seacrhFormSchema>

interface SearchInputProps {
    getPosts: (query: string) => Promise<void>
    qunatityPosts: number
}


export function Search({getPosts, qunatityPosts}: SearchInputProps) {

    const { register, handleSubmit } = useForm<SearchFormInput>({
        resolver: zodResolver(seacrhFormSchema),
    })


    async function handleSearchApi(data: SearchFormInput) {
        await getPosts(data.query) 
    }

    return(
        <SeachContent onSubmit={handleSubmit(handleSearchApi)}>
            <div>
                <h3>Publicações</h3>
                <span>{qunatityPosts} publicações</span>
            </div>
            <input type="text" placeholder="Buscar conteúdo" {...register("query")}/>
        </SeachContent>
    )
}