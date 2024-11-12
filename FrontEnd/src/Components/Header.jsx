import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const [activeButton, setActiveButton] = useState(0);

    const labels = ["Investments", "Bitcoin", "Ethereum"];

    useEffect(() => {
        // Define o botão ativo com base na URL atual
        const currentIndex = labels.findIndex(
            (label) => `/${label.toLowerCase()}` === location.pathname
        );
        setActiveButton(currentIndex);
    }, [location.pathname]);

    const handleClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
    };

    return (
        <>
            <div className="w-full h-32 flex justify-center items-end">
                <div className="w-full sm:w-3/4 md:w-2/5 h-14 flex justify-between bg-[#ffffff]/10 backdrop-blur-lg rounded-2xl shadow-lg shadow-amber-600 border border-white/20">
                    {/* Ícone e nome do site */}
                    <div className="flex items-center">
                        <div className="w-10 h-10 ml-2 bg-amber-600 rounded-full flex items-center justify-center">
                            {/* Ícone pode ser adicionado aqui */}
                        </div>
                    </div>

                    {/* Botões */}
                    <div className="w-full sm:w-4/6 md:w-5/6 h-10 mt-2 mr-2 rounded-lg flex justify-around">
                        {labels.map((label, index) => (
                            <Link key={index} to={`/${label.toLowerCase()}`}>
                                <button
                                    onClick={() => handleClick(index)}
                                    className={`px-6 py-2 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 ${activeButton === index
                                        ? "bg-gradient-to-b from-amber-600 to-orange-700 text-white focus:ring-amber-600"
                                        : "text-gray-400 focus:ring-amber-600"
                                        }`}
                                >
                                    {label}
                                </button>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </>

    );
}

export default Header;
