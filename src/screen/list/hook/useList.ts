import { useEffect, useState } from "react";
import { newsService } from "../../../data/service";
import { UseListNewsResult } from "./interface";
import { Categories } from "../../../data/model/Categories";

const useListNews = (): UseListNewsResult => {
    const [isLoading, setIsLoading] = useState(false)
    const [category, setCategory] = useState<Categories[]>([])

    const getHeadlines = async (): Promise<Categories[]> => {
        const result = await newsService.getHeadlines()
        return result
    }

    useEffect(() => {
        const loadHeadlines = async () => {
            setIsLoading(true)
            const result = await getHeadlines()
            setIsLoading(false)
            setCategory(result)
        }

        loadHeadlines()
    }, [])


    return {
        isLoading,
        category,
    }
}

export default useListNews