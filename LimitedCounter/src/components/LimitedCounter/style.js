import styled from 'styled-components'

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    background-color: #333333;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    font-family: Arial, Helvetica, sans-serif;

    > h1 {
        font-size: 50px;
    }

    > div {
        margin-top: 20px;

        > button {
            padding: 10px;
            background-color: aqua;
            border: none;
            margin: 10px;
        }
    }
`;