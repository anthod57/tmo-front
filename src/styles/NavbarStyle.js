import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 80px;
    background-color: ${props => props.theme.blue1};
    box-shadow: 0px 0px 8px 0px ${props => props.theme.blue1};
    position: relative;
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1600px;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    h2 {
        font-family: 'Toinen tammikuu', sans-serif;
        font-weight: 300;
        font-size: 3rem;
        color: white;
        transition: 0.6s all;

        &:hover {
            transform: scale(1.05);
        }

        a {
            text-decoration: none;
        }
    }

    ul {
        width: 100%;
        height: 100%;
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        gap: 1rem;
        color: white;
        padding: 1rem;
        
        &.right {
            justify-content: left;
        }

        &.left {
            justify-content: right;
        }

        li {
            position: relative;

            &:before {
                content: ""; 
                position: absolute;
                width: 100%;
                height: 2px;
                border-radius: 100px;
                bottom: -4px;
                left: 0;
                right: 0;
                background-color: white;
                transform: scaleX(0);
                transition: 0.3s all;
            }   

            &:hover {
                &:before {
                    transform: scaleX(1);
                }
            }

            &.active {
                &:before {
                    transform: scaleX(1);
                }
            }
        }

        a {
            text-decoration: none;
        }
    }
`;