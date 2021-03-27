import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
`

export const Content = styled.div`
    /* height: 100vh; */
    width: 80vw;
    max-width: 896px;
    margin-top: 80px;
`

export const ItemList = styled.div`
    height: 120px;
    width: 100%;
    max-width: 896px;
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    align-items: center;
`

export const Button = styled.button`
    height: 80px;
    width: 280px;
    background-color: #013D6A;
    border-radius: 5px;
    color: #fff;

`

export const EditButton = styled.button`
    height: 80px;
    width: 212px;
    background-color: #013D6A;
`

export const DeleteButton = styled.button`
    height: 80px;
    width: 212px;
    background-color: #013D6A;
`

export const TextInput = styled.div`
    height: 80px;
    width: 212px;
    input{
        outline: 0;
        border-width: 0 0 2px;
        border-color: blue
    }
`