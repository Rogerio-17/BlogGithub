import styled from "styled-components";

export const ProfileContent = styled.div`
position: relative;
background: ${({theme}) => theme.colors["base-profile"]};
margin-top: -6rem;
padding: 2rem 2.25rem;
border-radius: 8px;
box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

display: flex;
gap: 2rem;

> img{
    width: 9.25rem;
    border-radius: 8px;
}

a {
    display: flex;
    align-items: top;
    gap: 0.3rem;
    color: ${({theme}) => theme.colors["brand-blue"]};
    text-transform: uppercase;
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
}
`