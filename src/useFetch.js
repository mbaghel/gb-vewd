import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const useFetch = (fetchFunc, options) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [cookies] = useCookies(["gbKey"]);

  useEffect(() => {
    let isSubscribed = true;
    fetchFunc({ api_key: cookies.gbKey, ...options })
      .then(({ data }) => {
        if (isSubscribed) {
          if (!data.results) {
            setError(new Error(data.error));
          } else {
            setData(data);
          }
          setLoading(false);
        }
      })
      .catch(err => {
        if (isSubscribed) {
          setError(err);
          setLoading(false);
        }
      });
    return () => {
      isSubscribed = false;
    };
  }, []);

  return { loading, error, data };
};

export default useFetch;
