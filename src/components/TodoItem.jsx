import React from "react";
import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = React.forwardRef(
    ({ todo, deleteTodo, updateTodo, ...props }, ref) => {
        const { id, title, completed } = todo;
        return (
            <article
                {...props}
                ref={ref}
                className="flex gap-4 border-b border-b-gray-400 px-4  py-4 font-semibold 
         dark:border-b-gray-600"
            >
                <button
                    className={`h-5 w-5 flex-none rounded-full border-2 
                ${
                    completed
                        ? "flex items-center justify-center bg-gradient-to-br from-cyan-500 to-purple-500"
                        : "inline-block "
                }`}
                    onClick={() => updateTodo(id)}
                >
                    {completed && <IconCheck />}
                </button>
                <p
                    className={`flex-grow text-gray-600 dark:text-gray-300 ${completed && "text-gray-400 line-through dark:text-gray-500"}`}
                >
                    {title}
                </p>
                <button
                    className="flex-none"
                    onClick={() =>
                        completed
                            ? deleteTodo(id)
                            : console.log("no completado")
                    }
                >
                    <IconCross />
                </button>
            </article>
        );
    }
);

export default TodoItem;
