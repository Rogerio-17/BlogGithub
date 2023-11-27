import styled from "styled-components";

export const ProfileContent = styled.div`
position: relative;
background: ${({theme}) => theme.colors["base-profile"]};
margin-top: -6rem;
padding: 1rem 2.25rem;
border-radius: 8px;
box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

display: flex;
gap: 2rem;
align-items: center;

> img{
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
}

a {
    display: flex;
    align-items: top;
    gap: 0.3rem;
    color: ${({theme}) => theme.colors["brand-blue"]};
    text-transform: uppercase;

    &:hover{
        opacity: 0.8;
        transition: 0.3s;
    }
}

p {
    height: 4rem;
}

footer {
    display: flex;
    grid-template-columns: 3fr;
    gap: 1.5rem;
}

`


export const InformationField = styled.div`


div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    margin-top: 1rem;
}
`