import Header from '../../Components/Header';
import ValuesSlideBar from '../../Components/Investments/ValuesSlideBar';

const Investments = () => {
    return (
        <div className="flex-col bg-gradient-to-b from-[#000000] to-[#222222] min-h-screen justify-center items-center">
            <Header />
            <div className="flex justify-center mt-40">
                <ValuesSlideBar />
            </div>
        </div>
    );
}

export default Investments;
