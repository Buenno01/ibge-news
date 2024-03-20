import { useEffect, useState } from 'react';
import { NewsType } from '../@types/NewsType';
import formatApiData from '../utils/formatApiData';

const useFetch = (url: string) => {
  const [data, setData] = useState<NewsType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetch(url);
        const returnedData = await response.json();

        setData(formatApiData(returnedData.items) as NewsType[]);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
