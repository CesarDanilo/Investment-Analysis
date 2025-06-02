import Header from '../../Components/Header';
import ValuesSlideBar from '../../Components/Investments/ValuesSlideBar';
import TableOtherInvestiments from '../../Components/Investments/TableOtherInvestiments';
import { InvestmentsProvider } from '../../Context/InvestmentsContext';

const Investments = () => {
    return (
        <div className="bg-[#121212] min-h-screen flex flex-col text-[#e0e0e0]">
            <Header className="fixed top-0 left-0 w-full bg-[#1c1c1c] shadow-sm" />
            <div className="flex flex-col justify-center items-center flex-grow mt-20">
                <div className="flex flex-col gap-10 w-full max-w-4xl px-4">
                    <InvestmentsProvider>
                        <ValuesSlideBar />
                        <TableOtherInvestiments />
                    </InvestmentsProvider>
                </div>
            </div>
        </div>
    );
};

export default Investments;
