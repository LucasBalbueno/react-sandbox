import { styled } from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
    height: 100vh;
    background-color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 20px;

    &:hover {
        text-decoration: underline;
    }
`;

export const Title = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 40px;
    color: white;
`;