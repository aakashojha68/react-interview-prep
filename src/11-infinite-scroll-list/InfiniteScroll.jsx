import { useEffect, useRef, useState } from "react";

const generateFakeData = (pageNo) => {
  return new Promise((resolve, reject) => {
    const dataList = Array(10)
      .fill("")
      .map((_, i) => `Page no : ${pageNo} and sequence : ${i}`);
    setTimeout(() => resolve(dataList), 2000);
  });
};

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef(null);
  const pageNo = useRef(0);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await generateFakeData(pageNo.current++);
      setData((prev) => [...prev, ...res]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        console.log(entry);
        if (entry.isIntersecting) {
          observer.observe(entry.target);
          fetchData();
        }
      },
      {
        root: containerRef.current,
        threshold: 1,
      }
    );

    const lastElement = containerRef.current.lastChild;

    if (lastElement) {
      observer.observe(lastElement);
    }

    return () => {
      if (lastElement) {
        observer.unobserve(lastElement);
      }
    };
  }, [data]);

  return (
    <div className="px-4">
      <h1>Infinite List Scroll Using Intersection Observer Api </h1>
      <div
        className="mt-5 w-72 h-52 border border-black overflow-y-auto"
        ref={containerRef}
      >
        {data.map((item, index) => {
          return (
            <div key={item} className="p-1">
              {item}
            </div>
          );
        })}
      </div>
      {isLoading && <h1>Loading....</h1>}
    </div>
  );
};

export default InfiniteScroll;
