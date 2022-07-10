import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 400px;
    background-color: #f8f8f8;
    padding: 1rem;

    @media screen and (max-width: 960px){
        height: 100%;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;

    .left, .right {
        height: 100%;
        width: 50%;
        position: relative;
        color: white;
    }

    .left {
        padding: 1rem;
        color: ${props => props.theme.blue2};
    }

    .right {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .hero-image {
        width: 100%;
        height: auto;
        aspect-ratio: 1/1;
        position: absolute;
        max-width: 300px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .hero-text {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        justify-content: center;
        margin: auto;

        h1 {
            color: ${props => props.theme.blue1};
            margin-bottom: 1rem;
        }
    }

    @media screen and (max-width: 960px){
        flex-direction: column;
        justify-content: center;
        text-align: center;
        gap: 1rem;

        .left, .right {
            width: 100%;
        }

        .hero-text {

            button {
                margin: auto;
                margin-top: 1rem;
            }
        }

        .hero-image {
            position: relative;
        }
    }
`;