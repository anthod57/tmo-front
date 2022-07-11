import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.blue1};
    padding: 1rem;
    position: relative;
`;

export const Wrapper = styled.div`
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    margin-top: 1rem;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.white};

    .content {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin: auto;
        width: 100%;
        height: 100%;
        gap: 1rem;

        h3 {
            font-size: 2rem;
            max-width: 300px;
        }

        ul {
            list-style: none;

            a {
                text-decoration: none;
            }
        }
    }

    hr {
        width: 100%;
        height: 2px;
        background-color: ${props => props.theme.blue2};
        margin: 1rem;
    }

    .bottom {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;

        .social-medias {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.5rem;
            font-size: 1.25rem;

            a {
                transition: 0.3s all;

                &:hover {
                    color: ${props => props.theme.blue2};
                }
            }
        }
    }

    @media screen and (max-width: 960px){
        .content {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
        }

        .bottom {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 0.5rem;
        }
    }
`;