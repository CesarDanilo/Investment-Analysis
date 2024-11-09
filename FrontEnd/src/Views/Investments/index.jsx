import Header from '../../Components/Header'
import ValuesSlideBar from '../../Components/Investments/ValuesSlideBar';

const Investments = () => {
    return (
        <div className="bg-gradient-to-b from-[#000000] to-[#222222] min-h-screen">
            <Header />
            <div className=''>
                <ValuesSlideBar />
            </div>
        </div>
    )
}

export default Investments;