import styled from 'styled-components';

export const Container = styled.main`
    background-color: #333333;
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    > h1 {
        font-family: Arial, Helvetica, sans-serif;
        color: white;
    }

    > div {
        > button {
            width: 200px;
            padding: 20px;
            background-color: aqua;
            border: none;
            color: black;
            font-size: 20px;
            margin: 15px;
            font-family: Arial, Helvetica, sans-serif;
            
            &:hover{
                opacity: .5;
                transition: all .5s;
            }
        }
    }

`;