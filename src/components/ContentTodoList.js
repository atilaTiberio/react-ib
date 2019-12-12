import React from 'react';



const ContentTodoList = (props) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Todo</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            {props.todos.map((todo, index) =>
                <tr key={todo.id}>
                    <td>{todo.title}</td>
                    <td>{todo.todo}</td>
                    <td>
                        <button type="button" className="btn btn-primary"  onClick={() => props.testHandler(todo.id)}>Delete</button>
                    </td>
                </tr>
            )
            }

            </tbody>


        </table>
    )
}

export default ContentTodoList