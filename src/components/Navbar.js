import React from 'react'
import { Container, Wrapper } from '../styles/NavbarStyle'

export const Navbar = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <ul className="left">
                        <li><a href="">ACCUEIL</a></li>
                        <li><a href="">HERO</a></li>
                    </ul>

                    <h2><a href="/">LOGO</a></h2>

                    <ul className="right">
                        <li><a href="">TODO</a></li>
                        <li><a href="">FOOTER</a></li>
                    </ul>
                </Wrapper>
            </Container>
        </>
    )
}
