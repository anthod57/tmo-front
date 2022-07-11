import React, { useState } from 'react'
import { Container, Wrapper } from '../styles/PopupStyle'
import axios from 'axios';

export const Popup = (props) => {

    const [email, setEmail] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [message, setMessage] = useState(null);

    const isEmailValid = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const Subscribe = () => {
        setMessage(null);

        if (!email || !firstName || !lastName) {
            setMessage("Veuillez remplir tous les champs.");
            return;
        }

        if (!isEmailValid(email)) {
            setMessage("Veuillez entrer une adresse email valide.");
            return;
        }

        axios.request({
            method: "POST",
            url: `https://tmo-back.vercel.app/api/`,
            data: {
                email: email,
                firstname: firstName,
                lastname: lastName
            }
        }).then((res) => {
            if (res.status === 200) {
                setMessage("Cette adresse email est déjà enregistrée.")
            }

            if (res.status === 201) {
                setMessage("Votre adresse email a bien été enregistrée.")
            }
        }).catch((e) => {
            console.error(e);
            setMessage(e);
        });
    }

    return (
        <>
            <Container>
                <Wrapper>
                    <div className="close-button">
                        <i class="fa-solid fa-xmark" onClick={() => props.changeState(false)}></i>
                    </div>
                    <h3>Newsletter</h3>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    <label htmlFor="email">Email:</label><input type="email" name="email" placeholer="Email" onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="email">Prénom:</label><input type="text" name="firstname" placeholer="Prénom" onChange={(e) => setFirstName(e.target.value)} />
                    <label htmlFor="email">Nom:</label><input type="text" name="lastname" placeholer="Nom" onChange={(e) => setLastName(e.target.value)} />
                    <span className="message">{message}</span>
                    <button onClick={() => Subscribe()}>S'inscrire</button>
                </Wrapper>
            </Container>
        </>
    )
}
