import Header from '../../Components/Header';
import ValuesSlideBar from '../../Components/Investments/ValuesSlideBar';
import TableOtherInvestiments from '../../Components/Investments/TableOtherInvestiments';

const Investments = () => {
    return (
        <div className="bg-gradient-to-b from-[#000000] to-[#222222] min-h-screen flex flex-col">
            <Header className="fixed top-0 left-0 w-full" />
            <div className="flex flex-col justify-center items-center flex-grow mt-20">
                <div className="flex flex-col gap-14 w-3/4">
                    <ValuesSlideBar />
                    <TableOtherInvestiments />
                </div>
            </div>
        </div>
    );
}

export default Investments;
