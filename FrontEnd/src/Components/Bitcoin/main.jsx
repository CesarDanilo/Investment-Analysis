import React from 'react';

// Componente Section para evitar repetição de estilos
const Section = ({ title, children }) => (
    <div className="mb-8">
        <h2 className="text-amber-600 text-xl font-bold mb-4">{title}</h2>
        <p className="text-white text-xl">{children}</p>
    </div>
);

const MainBtc = () => {
    return (
        <div className="flex flex-col justify-center items-center w-3/5 mx-auto">
            <Section title="O que é Bitcoin?">
                Bitcoin é a primeira e mais conhecida criptomoeda do mundo, criada em 2009 por uma pessoa (ou grupo) sob o pseudônimo de Satoshi Nakamoto. Diferente das moedas tradicionais, como o real ou o dólar, o Bitcoin é totalmente digital e descentralizado, ou seja, não é controlado por governos, bancos ou qualquer instituição financeira. Ele opera em uma tecnologia chamada blockchain, que é um registro público e imutável de todas as transações já realizadas.
            </Section>
            <Section title="Para que serve o Bitcoin?">
                O Bitcoin foi criado com o objetivo de ser uma forma de dinheiro digital seguro, transparente e acessível a todos. Ele permite transferências rápidas e com baixas taxas, especialmente em transações internacionais, sem a necessidade de intermediários. Além disso, o Bitcoin é visto por muitos como uma reserva de valor, semelhante ao ouro, devido à sua escassez (apenas 21 milhões de unidades serão criadas) e à sua resistência à inflação. Hoje, o Bitcoin é usado tanto como meio de pagamento quanto como investimento, atraindo pessoas e instituições que buscam inovação financeira e proteção contra a desvalorização de moedas tradicionais.
            </Section>
        </div>
    );
};

export default MainBtc;