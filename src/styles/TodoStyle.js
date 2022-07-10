import styled from 'styled-components';

export const Container = styled.li`
    height: 100%;
    width: 100%;
    padding: 0.5rem;
    background-color: ${props => props.theme.blue1};
    border-radius: 10px;
    max-width: 400px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.5rem;
    position: relative;
    

    input[type=checkbox] {
        transform: scale(1);
        opacity: 0;
        width: unset;
        height: unset;
        position: absolute;
        left: 0.5rem;

        &:checked {

        }
    }
    
    label {
        span{
            width: 16px;
            height: 16px;
            display: flex;
            justify-content: center;
            border: 2px solid ${props => props.theme.white};
            border-radius: 50%;
            transition: all .3s;

            &.checked {
                background-color: #38f5cf;
            }
        }
    }

`