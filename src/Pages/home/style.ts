import styled from "styled-components";

export const HomeContainer = styled.main`
max-width: 920px;
margin: 0 auto;
 
 h2 {
    color: ${({theme}) => theme.colors["base-title"]};
 }
`

export const PostsContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
row-gap: 2rem;
column-gap: 2rem;
`