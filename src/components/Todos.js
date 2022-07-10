import React, { useEffect, useState } from 'react'
import { Container, Wrapper, Navigation } from "../styles/TodosStyle";
import { Todo } from './Todo';
import axios from 'axios';

export const Todos = () => {

    const [todos, setTodos] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const FetchData = () => {
        axios.request({
            method: "GET",
            url: `https://jsonplaceholder.typicode.com/todos/`,
        }).then((res) => {
            setTodos(chunkArray(res.data, 20));
        }).catch((e) => {
            console.error(e);
        });
    }

    // Split an array into multiple arrays of a defined size
    const chunkArray = (arr, size) => {
        return arr.length > size
            ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)]
            : [arr];
    }

    useEffect(() => {
        FetchData();
    }, [])

    return (
        <>
            <Container id="todos">
                <Wrapper>
                    <h2>Todos</h2>

                    <Navigation>
                        {todos.map((page, index) => {
                            return (<span className={index === currentPage ? "active" : ""} onClick={() => setCurrentPage(index)}>{index + 1}</span>)
                        })}
                    </Navigation>
                    <div className="todos-container">
                        {todos.map((page, index) => {
                            return (<>
                                <ul className={`todos-page ${index === currentPage ? "active" : ""}`} key={index} style={{ transform: `translateX(-${currentPage * 100}%)` }}>
                                    {page.map((todo, index) => {
                                        return (<Todo key={index} todo={todo}></Todo>);
                                    })}
                                </ul>
                            </>)
                        })}
                    </div>
                </Wrapper>
            </Container>
        </>
    )
}
