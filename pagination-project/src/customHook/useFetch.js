import { useEffect, useState } from 'react';
import paginate from '../util';
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const useFetch = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getProducts = async () => {
        const response = await fetch(url);
        const data = await response.json();
        // paginate(data);
        // setData(data);
        setData(paginate(data));
        setLoading(false);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return { loading, data };
};