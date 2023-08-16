export interface IPicture {
    id: string;
    alt_description: string;
    description: string;
    blur_hash: string
    urls: {
        regular: string,
    };
}

export interface IData {
    total: number;
    total_pages: number;
    results: IPicture[],
}

export interface UseAxiosResult {
    data: IData;
    isLoading: boolean;
    error: string | null;
    fetchData: (input: string, newPage: number | string) => Promise<void>;
}

export interface PictureContextProps {
    data: IData;
    fetchData: (input: string, newPage: number | string) => Promise<void>;
    isLoading: boolean;
    error: string | null;
    currentSearch: string;
    setCurrentSearch: (search: string) => void;
    currentPage: number | string;
    setCurrentPage: (newPage: number | string) => void;
}
