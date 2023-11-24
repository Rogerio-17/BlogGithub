import { SeachContent } from "./style";

export function Search() {
    return(
        <SeachContent>
            <div>
                <h3>Publicações</h3>
                <span>6 publicações</span>
            </div>
            <input type="text" placeholder="Buscar conteúdo"/>
        </SeachContent>
    )
}