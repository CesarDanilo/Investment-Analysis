import Header from '../../Components/Header'
import ValuesSlideBar from '../../Components/Investments/ValuesSlideBar';

const Investments = () => {
    return (
        <div className="flex-col bg-gradient-to-b from-[#000000] to-[#222222] min-h-screen justify-center items-center">
            <Header />
            <div className='flex gap-5 justify-center mt-40'>
                <div className='flex justify-center items-center w-[580px] h-72 bg-[#0D0D0D] p-10 rounded-xl'>
                    <ValuesSlideBar />
                </div>
                <div className='flex justify-center items-center w-[580px] h-72 bg-slate-600 p-10 rounded-xl'>
                    <ValuesSlideBar />
                </div>
            </div>
        </div>
    )
}

export default Investments;