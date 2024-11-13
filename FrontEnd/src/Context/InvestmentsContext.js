// context/InvestmentsContext.js

import React, { createContext, useContext, useState } from "react";

const InvestmentsContext = createContext();

export const InvestmentsProvider = ({ children }) => {
    const [labelValueMoney, setLabelValueMoney] = useState(0);
    const [labelValueMonth, setLabelValueMonth] = useState(1);

    return (
        <InvestmentsContext.Provider value={{ labelValueMoney, labelValueMonth, setLabelValueMoney, setLabelValueMonth }}>
            {children}
        </InvestmentsContext.Provider>
    )
}

export const useInvestment = () => {
    return useContext(InvestmentsContext)
}