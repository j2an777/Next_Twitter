"use client";

import { createContext, ReactNode, useState } from "react";

const TabContext = createContext({
    tab: 'rec',
    setTab: (value: 'rec' | 'fol') => {},
})

type TabProviderProps = { children: ReactNode }

const TabProvider = ({ children }: TabProviderProps) => {
    const [tab, setTab] = useState('rec');

    return (
        <TabContext.Provider value={{ tab, setTab }}>
            {children}
        </TabContext.Provider>
    )
}

export default TabProvider