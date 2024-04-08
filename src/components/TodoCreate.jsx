import React, { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");

    const handleSubmitAddTodo = (e) => {
        e.preventDefault();

        if (!title.trim()) {
            return setTitle("");
        }

        createTodo(title);
        setTitle("");
    };

    return (
        <form
            onSubmit={handleSubmitAddTodo}
            className="mt-8 flex items-center gap-4 overflow-hidden 
            rounded-md bg-white px-4 py-4 font-semibold transition-all duration-1000 dark:bg-gray-800"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                className="w-full bg-transparent text-gray-400 outline-none dark:bg-transparent"
                type="text"
                placeholder="Create a new todo..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            ></input>
        </form>
    );
};

export default TodoCreate;
