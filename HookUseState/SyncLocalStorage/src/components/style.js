import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 100vh;

    background-color: #333333;
    font-family: Arial, Helvetica, sans-serif;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    
    > h1 {
        color: white;
        font-size: 45px;
    }

    > div {
        button {
            padding: 15px;
            background-color: aqua;
            font-size: 15px;
            margin: 10px;
        }
    }
`;