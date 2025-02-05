const api = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"

const bitCountAPI = async () => {
    try {

    } catch (error) {
        console.log(`Erro na hora de buscar dados da api ${error}`)
    }
}

const BitcoinCount = () => {
    return (
        <div>
            <h1 className='text-green-500 text-3xl'>$101,778.79 USD </h1>
        </div>
    );
}

export default BitcoinCount;