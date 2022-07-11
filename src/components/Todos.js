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
                    <h2>Todo List</h2>

                    <Navigation>
                        {/* Display pages navigation*/}
                        {todos.map((page, index) => {
                            return (<span key={index} className={index === currentPage ? "active" : ""} onClick={() => setCurrentPage(index)}>{index + 1}</span>)
                        })}
                    </Navigation>

                    <div className="todos-container">
                        {/* Display pages */}
                        {todos.map((page, index) => {
                            return (<>
                                <ul className={`todos-page ${index === currentPage ? "active" : ""}`} key={index} style={{ transform: `translateX(-${currentPage * 100}%)` }}>
                                    {/* Display all todos */}
                                    {page.map((todo, index) => {
                                        return (<Todo key={index} todo={todo}></Todo>);
                                    })}
                                </ul>
                            </>)
                        })}
                    </div>
                </Wrapper>

                {/* SVG shape */}
                <div className="custom-shape-divider-bottom-1657546375">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </Container>
        </>
    )
}
