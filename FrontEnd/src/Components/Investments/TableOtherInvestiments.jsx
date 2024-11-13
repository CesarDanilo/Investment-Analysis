const TableOtherInvestiments = () => {
    return (

        <table className="table-auto bg-[#000000]/30 backdrop-blur-md  shadow-lg text-gray-200 w-full text-left rounded-lg">
            <thead className="rounded-lg">
                <tr className="bg-[#000000]/20 rounded-lg">
                    <th className="px-4 py-2 font-semibold text-amber-600">Tipos de Investimentos</th>
                    <th className="px-4 py-2 font-semibold text-amber-600">Poupança</th>
                    <th className="px-4 py-2 font-semibold text-amber-600">Investimento</th>
                </tr>
            </thead>
            <tbody className="rounded-lg">
                <tr className="hover:bg-[#000000]/20 transition-colors rounded-lg">
                    <td className="px-4 py-2">CDB (Certificado de Depósito Bancário)</td>
                    <td className="px-4 py-2">R$00.000</td>
                    <td className="px-4 py-2">R$00.000</td>
                </tr>
                <tr className="hover:bg-[#000000]/20 transition-colors rounded-lg" >
                    <td className="px-4 py-2 ">LCI (Letra de Crédito Imobiliário)</td>
                    <td className="px-4 py-2 ">R$00.000</td>
                    <td className="px-4 py-2 ">R$00.000</td>
                </tr>
                <tr className="hover:bg-[#000000]/20 transition-colors rounded-lg">
                    <td className="px-4 py-2 ">CRI (Certificado de Recebíveis Imobiliários)</td>
                    <td className="px-4 py-2 ">R$00.000</td>
                    <td className="px-4 py-2 ">R$00.000</td>
                </tr>
            </tbody>
        </table>

    )
}

export default TableOtherInvestiments;