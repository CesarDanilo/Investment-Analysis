import Header from '../../Components/Header'
import bit from '../../../public/bit.png'
import MainBtc from '../../Components/Bitcoin/main'

const Bitcoin = () => {

    // Link de api que traz o valor do bitcoin atual em dolar
    // https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd

    return (
        <>
            <div className="bg-gradient-to-b from-[#000000] to-[#222222] min-h-screen flex flex-col itens justify-center items-center">
                <Header className="fixed top-0 left-0 w-full" />
                <div className='mt-44 flex-col justify-center items-center flex-grow'>
                    <div className='w-52 h-full'>
                        <img src={bit} alt="" />
                    </div>
                    <div>
                        <h1 className='text-green-500 text-3xl'>$101,778.79 USD </h1>
                    </div>
                </div>
                <MainBtc />
            </div>
        </>
    )
}

export default Bitcoin;