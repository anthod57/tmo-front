import React from 'react'
import { Container, Wrapper } from '../styles/FooterStyle'

export const Footer = (props) => {
    return (
        <Container id="footer">
            <Wrapper>
                <div className="content">
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

                    <ul className="menu">
                        {props.menu.map((item, index) => {
                            return (<li key={index}><a href={item.link}>{item.text}</a></li>)
                        })}
                    </ul>
                </div>

                <hr />

                <div className="bottom">
                    <span>© 2022 Sitename</span>

                    <div className="social-medias">
                        {props.social.map((item, index) => {
                            return (<a href={item.link}><i class={item.icon}></i></a>);
                        })}
                    </div>
                </div>
            </Wrapper>
        </Container>
    )
}
