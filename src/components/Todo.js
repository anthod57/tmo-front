import React, { useEffect, useState, useRef } from 'react'
import { Container } from '../styles/TodoStyle'

export const Todo = (props) => {

    const [checked, setChecked] = useState(false);
    const label = useRef();

    useEffect(() => {
        setChecked(props.todo.completed)
    }, [props.todo.completed])

    return (
        <>
            <Container>
                <label ref={label}><span className={props.todo.completed ? "checked" : ""}></span></label>
                <input type="checkbox" onChange={(e) => {
                    setChecked(e.target.checked);

                    e.target.checked ?
                        label.current.children[0].classList.add("checked") :
                        label.current.children[0].classList.remove("checked")
                }} checked={checked} />
                {props.todo.title}
            </Container>
        </>
    )
}
