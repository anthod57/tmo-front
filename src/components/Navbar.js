import React from 'react'
import { Container, Wrapper } from '../styles/NavbarStyle'

export const Navbar = (props) => {
    return (
        <>
            <Container>
                <Wrapper>
                    <ul className="left">
                        {props.menu.filter(x => x.side === "left").map((item, index) => {
                            return (<li><a href={item.link}>{item.text}</a></li>);
                        })}
                    </ul>

                    <h2><a href="/">LOGO</a></h2>

                    <ul className="right">
                        {props.menu.filter(x => x.side === "right").map((item, index) => {
                            return (<li><a href={item.link}>{item.text}</a></li>);
                        })}
                    </ul>
                </Wrapper>
            </Container>
        </>
    )
}
