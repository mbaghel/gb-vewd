import { useState, useEffect, useContext } from "react";
import { User } from "./AuthGate";
import { apiInstance } from "./lib/fetching";

const videoTypeID = 2300;

const api = {
  videos: options =>
    apiInstance.get("videos/", {
      params: {
        field_list: "id,name,deck",
        limit: 24,
        ...options
      }
    }),
  video: ({ id, ...rest }) =>
    apiInstance.get(`video/${videoTypeID}-${id}/`, {
      params: {
        field_list: "hd_url,high_url,low_url,saved_time",
        ...rest
      }
    })
};

const useFetch = (type, options) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const user = useContext(User);

  useEffect(() => {
    let isSubscribed = true;
    api[type]({ api_key: user, ...options })
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
  }, [type, options, user]);

  return { loading, error, data };
};

export default useFetch;
