import styled from "styled-components";

export const SeachContent =  styled.form`
margin-top: 4.5rem;
margin-bottom: 2.5rem;

> input {
    width: 100%;
    padding: 0.75rem;
    border-radius: 8px;
    background-color: ${({theme}) => theme.colors["base-input"]};
    color: ${({theme}) => theme.colors["base-label"]};
    border: 1px solid transparent;

    &:focus {
        outline: 0;
        border: 1px solid ${({theme}) => theme.colors["base-border"]};
    }
}


> div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    color: ${({theme}) => theme.colors["base-title"]};

    span {
        color: ${({theme}) => theme.colors["base-span"]};
    }
}

`