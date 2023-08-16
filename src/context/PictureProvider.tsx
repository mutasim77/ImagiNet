import { createContext, useState } from "react";
import useAxios from "../hooks/useAxios";
import { PictureContextProps } from "../types";


export const PictureContext = createContext<PictureContextProps>({
    data: {
        total: 0,
        total_pages: 0,
        results: [],
    },
    fetchData: async () => { },
    isLoading: false,
    error: null,
    currentSearch: '',
    setCurrentSearch: () => { },
    currentPage: 1,
    setCurrentPage: () => { }
});

export const PictureProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentSearch, setCurrentSearch] = useState<string>('cat');
    const [currentPage, setCurrentPage] = useState<number | string>(1);

    const { isLoading, error, data, fetchData } = useAxios();

    const value = {
        data,
        fetchData,
        isLoading,
        error,
        currentSearch,
        setCurrentSearch,
        currentPage,
        setCurrentPage
    }

    return (
        <PictureContext.Provider value={value}>
            {children}
        </PictureContext.Provider>
    )
}