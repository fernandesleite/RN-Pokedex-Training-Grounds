import { AxiosResponse } from "axios"
import { useState, useEffect } from "react"

interface UseAxiosRequestProps<T> {
    request: () => Promise<AxiosResponse<T>>
}

export const useAxiosRequest = <T>({request}: UseAxiosRequestProps<T>) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState<T | null>(null)

    useEffect(() => {
        setLoading(true)
        request()
        .then(response => {
        setData(response.data)
    })
    .catch((error) => {
        setError(error)
    })
    .finally(() => {
        setLoading(false)
    })

    return () => {
        setData(null);
        setError(null);
        setLoading(false);
    };
    }, [])
    


    return { data, error, loading }
}