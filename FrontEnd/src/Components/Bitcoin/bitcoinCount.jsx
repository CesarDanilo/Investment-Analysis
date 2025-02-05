import React, { useEffect, useState } from 'react';

const api = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";

const BitcoinCount = () => {
    const [price, setPrice] = useState(null); // Estado para armazenar o preço do Bitcoin
    const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
    const [error, setError] = useState(null); // Estado para armazenar erros

    useEffect(() => {
        const fetchBitcoinPrice = async () => {
            try {
                const response = await fetch(api); // Faz a requisição à API
                if (!response.ok) {
                    throw new Error("Erro ao buscar dados da API");
                }
                const data = await response.json(); // Converte a resposta para JSON
                setPrice(data.bitcoin.usd); // Atualiza o estado com o preço do Bitcoin
            } catch (error) {
                console.error(`Erro na hora de buscar dados da API: ${error}`);
                setError(error.message); // Armazena o erro no estado
            } finally {
                setLoading(false); // Finaliza o carregamento
            }
        };

        fetchBitcoinPrice(); // Chama a função para buscar o preço
    }, []); // O array vazio garante que o useEffect só execute uma vez (no mount)

    if (loading) {
        return <p className="text-white text-xl">Carregando preço do Bitcoin...</p>; // Exibe mensagem de carregamento
    }

    if (error) {
        return <p className="text-red-500 text-xl">Erro: {error}</p>; // Exibe mensagem de erro
    }

    return (
        <div>
            <h1 className='text-green-500 text-3xl'>
                ${price.toLocaleString("en-US")} USD {/* Formata o preço com separadores de milhares */}
            </h1>
        </div>
    );
};

export default BitcoinCount;