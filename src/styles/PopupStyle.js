import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    background-color: #00000080;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 100%;
    height:  100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 99;
`;

export const Wrapper = styled.div`
    display: flex;
    max-width: 300px;
    width: 100%;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.white};
    border-radius: 8px;
    box-shadow: 0 0 5px hsl(0deg 0% 0% / 25%);
    padding: 1rem;
    gap: 0.5rem;
    margin: auto;
    position: relative;

    span {
        text-align: center;
        font-size: 0.8rem;
        font-style: italic;
    }

    label {
        align-self: start;
        font-size: 0.9rem;
    }

    .close-button {
        cursor: pointer;
        position: absolute;
        right: 0.75rem;
        top: 0.75rem;
        transition: 0.3s all;

        &:hover {
            color: ${props => props.theme.blue1};
        }
    }
`;