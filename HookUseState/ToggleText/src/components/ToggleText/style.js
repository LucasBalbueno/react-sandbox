import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 100vh;

    background-color: #333333;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-family: Arial, Helvetica, sans-serif;

    > div {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;


        > h1 {
            font-size: 50px;
            color: white;
        }
    }

    > button {
        background-color: aqua;
        padding: 10px;
        border: none;
        font-size: 15px;
        border-radius: 10px;
        margin-top: 30px;
        cursor: pointer;
    }
`;