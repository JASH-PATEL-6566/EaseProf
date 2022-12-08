import { useState } from "react";
import { createContext, useContext } from "react";

const defaultData = {
    name: '',
    subtitle: '',
    based: '',
    portfolio: '',
    portfolio_link: '',
    contact: '',
    currentWork: '',
    currentWork_link: '',
    collaborate: '',
    else: ''
}

const DataContext = createContext();
export function useData() {
    return useContext(DataContext);
}

export default function DataProvider({ children }) {
    const [data, setData] = useState(defaultData);

    const changeData = (id, value) => {
        setData({ ...data, [id]: value })
    }

    const value = {
        data,
        changeData
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}