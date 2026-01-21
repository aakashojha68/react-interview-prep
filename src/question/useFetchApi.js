import React, { useEffect, useState } from "react";

const fetchApi = (count) => {
  console.log("count ", count);
  return new Promise((resolve, reject) => {
    if (count === 5) {
      resolve("Success");
    } else {
      reject("Error");
    }
  });
};

const useFetchApi = () => {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState("");

  useEffect(() => {
    fetchApi(count)
      .then((res) => setResult(res))
      .catch((err) => {
        setCount((prev) => prev + 1);
        setResult(err);
      });
  }, [count]);

  return { count, result };
};

export default useFetchApi;
