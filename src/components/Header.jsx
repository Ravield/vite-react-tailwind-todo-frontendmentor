import { useEffect, useRef, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const initialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode);

    //const refHeader = useRef(null);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            //refHeader.current.classList.add("bg-gray-900");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            //refHeader.current.classList.remove("bg-gray-900");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        // <header className="container mx-auto px-4 pt-8" ref={refHeader}>
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                    Todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <IconSun /> : <IconMoon />}
                </button>
            </div>
        </header>
    );
};
export default Header;