import {useEffect, useState} from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const response = await axios.get(url)
                setData(response.data)
            } catch (err) {
                setError(err)
            }
            setTimeout(() => {
                setLoading(false)
            }, 4000);
        };
        fetchData();
    }, [url])

    return {data, loading, error}
}

export default useFetch;