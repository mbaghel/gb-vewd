import React, { useContext, useEffect, useState } from "react";
import { User } from "./AuthGate";
import { apiInstance } from "./lib/fetching";

const videoTypeID = 2300;

const api = {
  videos: (user, options) =>
    apiInstance.get("videos/", {
      params: {
        field_list: "id,name,deck",
        limit: 24,
        api_key: user,
        ...options
      }
    }),
  video: (user, id, options) =>
    apiInstance.get(`video/${videoTypeID}-${id}/`, {
      params: {
        field_list: "hd_url,high_url,low_url,saved_time,name,length_seconds",
        api_key: user,
        ...options
      }
    }),
  search: (user, query, options) => {
    if (query === null)
      return new Promise((res, rej) => {
        res({ data: null });
      });

    return apiInstance.get("search/", {
      params: {
        api_key: user,
        resources: "video",
        field_list: "id,name,deck",
        query,
        ...options
      }
    });
  },
  shows: (user, options) =>
    apiInstance.get("video_shows/", {
      params: {
        api_key: user,
        field_list: "id,title,deck",
        ...options
      }
    })
};

const withFetch = getFunc => Component => props => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const user = useContext(User);

  useEffect(() => {
    setLoading(true);
    let isSubscribed = true;
    getFunc(api, user, props)
      .then(({ data }) => {
        if (isSubscribed) {
          setData(data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (isSubscribed) {
          if (err.response && err.response.data.error) {
            setError(
              new Error(
                `Status Code: ${err.response.status}, Error: ${
                  err.response.data.error
                }`
              )
            );
          } else {
            setError(err);
            setLoading(false);
          }
        }
      });
    return () => {
      isSubscribed = false;
    };
  }, [props, user]);

  return <Component data={data} loading={loading} error={error} {...props} />;
};

export default withFetch;
