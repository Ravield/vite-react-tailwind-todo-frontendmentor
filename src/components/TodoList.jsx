import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
    return (
        <div
            className="mt-8 overflow-hidden rounded-t-md bg-white
        transition-all duration-1000 dark:bg-gray-800 [&>article]:px-4"
        >
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
