import { useState, useEffect } from 'react';

const useSuggestionsApi = () => {
  const [data, setData] = useState({ suggestions: [] });
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
 
  useEffect(() => {
    const fetchData = () => {
      setError(false);
      setLoading(true);

      fetch(url).then((res) => {
        if (res.status !== 200) {
          console.error(`It seems there was an problem fetching the result. Status Code: ${res.status}`)
          return;
        }
        res.json().then((fetchedData) => {
          setData(fetchedData)
        })
      }).catch(() => {
        setError(true)
      })
      setLoading(false);
    };
 
    fetchData();
  }, [url]);
 
  return [{ data, loading, error }, setUrl];
}

export default useSuggestionsApi;