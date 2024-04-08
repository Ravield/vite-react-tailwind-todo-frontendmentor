const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto mt-8 ">
            <div
                className="flex justify-center gap-4 rounded-md bg-white p-4 font-semibold 
            transition-all duration-1000 dark:bg-gray-800"
            >
                <button
                    className={`${
                        filter === "all"
                            ? "text-blue-600 hover:text-gray-400 dark:text-blue-400 dark:hover:text-gray-300"
                            : "text-gray-400 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                    }`}
                    onClick={() => changeFilter("all")}
                >
                    All
                </button>
                <button
                    className={`${
                        filter === "active"
                            ? "text-blue-600 hover:text-gray-400 dark:text-blue-400 dark:hover:text-gray-300"
                            : "text-gray-400 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                    }`}
                    onClick={() => changeFilter("active")}
                >
                    Active
                </button>
                <button
                    className={`${
                        filter === "completed"
                            ? "text-blue-600 hover:text-gray-400 dark:text-blue-400 dark:hover:text-gray-300"
                            : "text-gray-400 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                    }`}
                    onClick={() => changeFilter("completed")}
                >
                    Completed
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;
