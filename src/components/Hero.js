import React, { useState } from 'react'
import { Container, Wrapper } from '../styles/HeroStyle'
import { Popup } from './Popup';

export const Hero = () => {

    const [showPopup, setshowPopup] = useState(false);

    return (
        <>
            <Container id="hero">
                <Wrapper>
                    <div className="left">
                        <div className="hero-text">
                            <h1>Rejoignez notre newsletter !</h1>
                            <p>Abonnez-vous à notre Newsletter gratuite pour rester informé sur les nouvelles et les promotions à venir.</p>
                            <button onClick={() => { setshowPopup(!showPopup) }}>Rejoindre</button>
                        </div>
                    </div>

                    <div className="right">
                        <div className="hero-image">
                            <img src="/images/newsletter.png" alt="" />
                        </div>
                    </div>
                </Wrapper>
            </Container>
            {showPopup ?
                (<Popup changeState={setshowPopup}></Popup>)
                : ""}
        </>
    )
}
