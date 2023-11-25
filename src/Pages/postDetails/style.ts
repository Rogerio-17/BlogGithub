import styled from "styled-components";

export const PostDetailsContainer = styled.main`
max-width: 920px;
margin: 0 auto;
margin-bottom: 2rem;

`


export const DescriptionContent = styled.div`
width: 100%;
padding: 2rem;
line-height: 2rem;

p {
    margin-bottom: 2rem;

    &:last-child{
        margin: 0;
    }
}

a {
    color: ${({theme}) => theme.colors["brand-blue"]};
    text-decoration: underline; 
}
`