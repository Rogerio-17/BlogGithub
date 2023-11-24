import styled from "styled-components";

export const PostContainer = styled.div`
width: 27.75rem;
padding: 2rem;
background: ${({ theme }) => theme.colors["base-post"]};
border-radius: 8px;


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
`