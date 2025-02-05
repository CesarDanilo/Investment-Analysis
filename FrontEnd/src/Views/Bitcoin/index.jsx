import Header from '../../Components/Header'
import bit from '../../../public/bit.png'
import MainBtc from '../../Components/Bitcoin/main'
import BitcoinCount from '../../Components/Bitcoin/bitcoinCount'
const Bitcoin = () => {

    // Link de api que traz o valor do bitcoin atual em dolar
    // https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd

    return (
        <>
            <div className="bg-gradient-to-b from-[#000000] to-[#222222] min-h-screen flex flex-col itens justify-center items-center">
                <Header className="fixed top-0 left-0 w-full" />
                <div className='mt-20 flex-col justify-center items-center flex-grow'>
                    <div className='w-48 h-full'>
                        <img src={bit} alt="" />
                    </div>
                    <BitcoinCount />
                </div>
                <MainBtc />
            </div>
        </>
    )
}

export default Bitcoin;