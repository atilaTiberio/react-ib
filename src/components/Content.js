import React, {useState, useRef, useEffect} from "react";

import ContentTodoList from './ContentTodoList'
import Header from "./Header";

function Content() {

    const [title, setTitle] = useState('');
    const [todo, setTodo] = useState('');

    const titleRef = useRef();

    const temp = JSON.parse(localStorage.getItem("list"));
    const [todos, setTodos] = useState(temp ? temp : [])

    useEffect( () => {localStorage.setItem("list",JSON.stringify(todos))},[todos]);
    const submitHandler = (event) => {
        event.preventDefault();
        const localTodos = [...todos];

        localTodos.push(
            {
                title: title,
                todo: todo,
                id: Date.now()
            }
        )

        setTodos(localTodos);
        setTitle('');
        setTodo('');
        titleRef.current.focus()

        localStorage.setItem("list", JSON.stringify(todos));

    }

    const parentHandler = (todoId) => {
        const localTodos = [...todos];
        const todoRemoved = localTodos.filter(todo => todo.id !== todoId);
        setTodos(todoRemoved)
        localStorage.setItem("list", JSON.stringify(todoRemoved));
    }

    return (
        <div className="container">

            <Header/>
            <form onSubmit={submitHandler}>

                <input ref={titleRef}
                       type="text"
                       placeholder="Title"
                       value={title}
                       name="title"
                       onChange={e => setTitle(e.target.value)}
                       className="input-group-sm"
                       required
                />

                <input
                    type="text"
                    placeholder="Todo"
                    value={todo}
                    name="todo"
                    onChange={e => setTodo(e.target.value)}
                    className="input-group-sm"
                    required
                />
                <button className="btn btn-primary" type="submit">Agregar</button>
            </form>

            {todos.length > 0 && <ContentTodoList todos={todos} testHandler={parentHandler}/>}

        </div>
    )
}

export default Content;
