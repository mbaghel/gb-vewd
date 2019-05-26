import { useState, useEffect } from "react";

const useFetch = fetchFunc => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    fetchFunc()
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
  }, [fetchFunc]);

  return { loading, error, data };
};

export default useFetch;
