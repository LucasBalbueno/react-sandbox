import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right, rgb(248, 216, 90), rgb(234, 64, 52));

    display: flex;
    justify-content: center;
    align-items: center;

    > h1 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 50px;
        color: white;
        border: 5px solid white;
        border-radius: 20px;
        width: 250px;
        padding: 20px;
    }
`;