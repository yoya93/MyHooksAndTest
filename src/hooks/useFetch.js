import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);
  const [apiData, setapiData] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setapiData({
      loading: true,
      data: null,
      error: null,
    });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        isMounted.current &&
          setapiData({
            loading: false,
            data,
            error: null,
          });
      })
      .catch(() => {
        setapiData({
          data: null,
          loading: false,
          error: "No se pudo cargar la info",
        });
      });
  }, [url]);

  return apiData;
};
