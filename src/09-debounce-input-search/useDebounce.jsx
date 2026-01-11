import { useEffect, useRef } from "react";

const useDebounce = (fn, delay = 300) => {
  const timerId = useRef(null);

  const debounceFn = (...args) => {
    if (timerId.current !== null) {
      clearTimeout(timerId.current);
    }

    timerId.current = setTimeout(() => fn(...args), delay);
  };

  useEffect(() => {
    return () => {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    };
  }, []);

  return debounceFn;
};

export default useDebounce;
