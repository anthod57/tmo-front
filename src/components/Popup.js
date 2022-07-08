import React from 'react'
import { Container, Wrapper } from '../styles/PopupStyle'

export const Popup = (props) => {
    return (
        <>
            <Container>
                <Wrapper>
                    <h3>Newsletter</h3>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    <label for="email">Email:</label><input type="email" name="email" placeholer="Email" />
                    <label for="email">Prénom:</label><input type="text" name="firstname" placeholer="Prénom" />
                    <label for="email">Nom:</label><input type="text" name="lastname" placeholer="Nom" />
                    <button>S'inscrire</button>
                </Wrapper>
            </Container>
        </>
    )
}
