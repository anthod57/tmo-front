import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100%;
    padding: 1rem;
    min-height: 1000px;
    position: relative;

    .custom-shape-divider-bottom-1657546375 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1657546375 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 69px;
}

.custom-shape-divider-bottom-1657546375 .shape-fill {
    fill: ${props => props.theme.blue1};
}

`;

export const Wrapper = styled.div`
    margin: auto;
    width: 100%;
    height: 100%;
    max-width: 600px;

    h2 {
        text-align: center;
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .todos-container {
        display: flex;
        align-items: flex-start;
        justify-content: start;
        overflow: hidden;
        width: 100%;
        
        ul {
            padding: 0.5rem;
            width: 100%;
            list-style: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            color: ${props => props.theme.white};
            flex-shrink: 0;
            transition: 0.5s all;
        }
    }
`;

export const Navigation = styled.div`
    width: 100%;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    margin-bottom: 1rem;
    font-weight: 500;
    font-size: 1.1rem;

    span {
        cursor: pointer;
        transition: 0.1s all;

        &.active {
            color: ${props => props.theme.blue1};
        }
    }
`