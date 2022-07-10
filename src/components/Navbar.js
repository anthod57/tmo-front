import React from 'react'
import { Container, Wrapper } from '../styles/NavbarStyle'

export const Navbar = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <ul className="left">
                        <li><a href="">ACCUEIL</a></li>
                        <li><a href="#hero">HERO</a></li>
                    </ul>

                    <h2><a href="/">LOGO</a></h2>

                    <ul className="right">
                        <li><a href="#todos">TODOS</a></li>
                        <li><a href="#footer">FOOTER</a></li>
                    </ul>
                </Wrapper>
            </Container>
        </>
    )
}
