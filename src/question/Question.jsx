import React, { useEffect } from "react";
// import useFetchApi from "./useFetchApi";

const Question = () => {
  // const { count, result } = useFetchApi();

  const fetch = () => {
    // for (var i = 0; i < 3; i++) {
    //   Promise.resolve().then(() => console.log(i));
    // }
    // Promise.any([Promise.reject("A"), Promise.reject("B")]).catch((e) =>
    //   console.log(e.errors),
    // );
    // Promise.resolve(1)
    //   .then((x) => x + 1)
    //   .then((x) => Promise.resolve(x + 1))
    //   .then(console.log);
    // Promise.resolve("OK")
    //   .finally(() => "IGNORED")
    //   .then(console.log);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <p>{count}</p>
      <p>{result}</p>
    </div>
  );
};

export default Question;
