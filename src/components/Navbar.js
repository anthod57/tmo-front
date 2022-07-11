import React, { useState } from 'react'
import { Container, Wrapper } from '../styles/NavbarStyle'

export const Navbar = (props) => {


    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <>
            <Container>

                <div className="mobile-menu-button">
                    <i className="fa-solid fa-bars" onClick={() => setShowMobileMenu(!showMobileMenu)}></i>
                </div>

                <Wrapper>
                    <ul className="left">
                        <h2><a href="/">LOGO</a></h2>
                    </ul>

                    {/* Display menu links */}
                    <ul className={`right ${showMobileMenu ? "show" : ""}`}>
                        {props.menu.map((item, index) => {
                            return (<li key={index}><a href={item.link} onClick={() => setShowMobileMenu(false)}>{item.text}</a></li>);
                        })}
                    </ul>
                </Wrapper>
            </Container>
        </>
    )
}
