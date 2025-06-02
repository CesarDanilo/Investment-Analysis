import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const labels = ["Investments", "Bitcoin", "Ethereum"];

    const getActiveIndex = () => {
        if (location.pathname === "/") return 0;
        return labels.findIndex(
            (label) => `/${label.toLowerCase()}` === location.pathname
        );
    };

    const [activeButton, setActiveButton] = useState(getActiveIndex());

    useEffect(() => {
        setActiveButton(getActiveIndex());
    }, [location.pathname]);

    return (
        <header className="w-full h-20 flex justify-center items-center bg-[#121212] border-b border-gray-800">
            <div className="w-full max-w-4xl flex items-center justify-between px-6">
                {/* Logo minimalista */}
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-black font-bold select-none">
                    B
                </div>

                {/* Navegação */}
                <nav className="flex gap-6" aria-label="Main navigation">
                    {labels.map((label, index) => (
                        <Link
                            key={index}
                            to={`/${label.toLowerCase()}`}
                            aria-current={activeButton === index ? "page" : undefined}
                            className={`text-sm font-medium transition-colors duration-200
                                ${activeButton === index
                                ? "text-amber-400 border-b-2 border-amber-400"
                                : "text-gray-500 hover:text-amber-400"
                            }`}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Header;
