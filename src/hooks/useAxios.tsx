import { useEffect, useState } from "react"
import picturesService from "../services/pictures.service";
import { UseAxiosResult, IData } from "../types";

const useAxios = (): UseAxiosResult => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<IData>({
        total: 0,
        total_pages: 0,
        results: [],
    });

    const [error, setError] = useState<string | null>(null);

    const fetchData = async (input: string = 'cat', newPage: number | string): Promise<void> => {
        setIsLoading(true);
        try {
            const response = await picturesService.getByNamePics(input, newPage);
            setData(response);
            setError(null);
        } catch (error) {
            setError('Failed to fetch pictures');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData('cat', 1);
    }, []);

    return {
        isLoading,
        data,
        error,
        fetchData
    };
}

export default useAxios;