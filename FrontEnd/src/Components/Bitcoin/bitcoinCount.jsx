import React, { useEffect, useState } from 'react';

const api = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";

const BitcoinCount = () => {
    const [price, setPrice] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBitcoinPrice = async () => {
            try {
                const response = await fetch(api);
                if (!response.ok) {
                    throw new Error("Erro ao buscar dados da API");
                }
                const data = await response.json();
                setPrice(data.bitcoin.usd);
            } catch (error) {
                console.error(`Erro na hora de buscar dados da API: ${error}`);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBitcoinPrice();
    }, []);

    if (loading) {
        return <p className="text-gray-400 text-lg">Carregando preço do Bitcoin...</p>;
    }

    if (error) {
        return <p className="text-red-600 text-lg">Erro: {error}</p>;
    }

    return (
        <div className="bg-[#0D0D0D] p-4 rounded-lg shadow-md w-max mx-auto mb-6">
            <h1 className="text-amber-500 text-4xl font-semibold">
                ${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD
            </h1>
        </div>
    );
};

export default BitcoinCount;
