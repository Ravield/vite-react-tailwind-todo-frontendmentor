import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import TodoComputed from "./components/TodoComputed.jsx";
import TodoCreate from "./components/TodoCreate.jsx";
import TodoFilter from "./components/TodoFilter.jsx";
import TodoList from "./components/TodoList.jsx";
import { DragDropContext } from "@hello-pangea/dnd";

// const initialStateTodos = [
//     {
//         id: 1,
//         title: "Complete online Javascript bluuweb course ",
//         completed: true,
//     },
//     {
//         id: 2,
//         title: "Go to the gym",
//         completed: false,
//     },
//     {
//         id: 3,
//         title: "10 minutes meditation",
//         completed: false,
//     },
//     {
//         id: 4,
//         title: "Complete todo app on Frontend Mentor",
//         completed: false,
//     },
// ];

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("all");

    const changeFilter = (filter) => setFilter(filter);

    const filteredTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    const handleDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;

        setTodos((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
        );
    };

    return (
        <div
            className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] 
            bg-contain bg-no-repeat transition-all duration-1000 
            dark:bg-gray-950 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] 
            md:bg-[url('./assets/images/bg-desktop-light.jpg')] 
            md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]"
        >
            <Header />

            <main className="container mx-auto mt-8 px-4 md:max-w-xl">
                <TodoCreate createTodo={createTodo} />

                <DragDropContext onDragEnd={handleDragEnd}>
                    <TodoList
                        todos={filteredTodos()}
                        deleteTodo={deleteTodo}
                        updateTodo={updateTodo}
                    />
                </DragDropContext>

                <TodoComputed
                    computedItemsLeft={computedItemsLeft}
                    clearCompleted={clearCompleted}
                />

                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>

            <footer className="mt-8 text-center text-gray-400 dark:text-gray-500">
                Drag and drop
            </footer>
        </div>
    );
};

export default App;
