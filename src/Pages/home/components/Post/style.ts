import styled from "styled-components";

export const PostContainer = styled.a`
width: 27.75rem;
height: 15.25rem;
padding: 2rem;
background: ${({ theme }) => theme.colors["base-post"]};
border-radius: 8px;
border: 1px solid transparent;
cursor: pointer;

div {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors["base-span"]};
    margin-bottom: 1.5rem;
    
    h2 {
        width: 80%;
        color: ${({ theme }) => theme.colors["base-title"]};
    }
}

p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
    }


    &:hover {
        border: 1px solid ${({theme}) => theme.colors["brand-blue"]};
        transition: 0.3s;
    }
`