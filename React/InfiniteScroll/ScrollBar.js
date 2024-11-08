import React, { useCallback, useEffect, useRef, useState } from "react";

// Intersection Observer
//https://jsonplaceholder.typicode.com/photos?_pages=${index}&_limit=9

const ScrollBar = () => {
  const ScrollRef = useRef();
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);

  //    Generic Function
  const fetchPhotos = async (index) => {
    try {
      const url = `https://jsonplaceholder.typicode.com/photos?_pages=${index}&_limit=9`;
      const result = await fetch(url);
      const data = await result.json();
      return data;
    } catch (error) {
      console.log("Images not able to fetch:", error);
    }
  };


  // // Intersection Observer - Function
  const getData = useCallback(async () => {
    if (loading) 
        return;
    setLoading(true);
    const data = await fetchPhotos(page);
    setImages((prevImage) => [...prevImage, ...data]);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    setPage((prevPage) => prevPage + 1);
  }, [page, loading]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const Target = entries[0];
      if (Target.isIntersecting) {
        getData();
      }
    })

    if (ScrollRef.current) {
      observer.observe(ScrollRef.current);
    }

    return () => {
      if (ScrollRef.current) {
        observer.unobserve(ScrollRef.current);
      }
    }
  }, [getData]);

  const fetchFirstPage = async () => {
    const data = await fetchPhotos(1);
    setImages(data);
  };
  
  useEffect(() => {
    fetchFirstPage();
  }, []);

  console.log("images", images);
  return (
    <div>
      <h1>scrolling</h1>
      {
      images?.map((item, index) => (
          <img
          key={index}
          alt={item.title}
            src={item.thumbnailUrl}
          ></img>
        ))
      }
      <div ref={ScrollRef}>{loading && <h1>Loading...</h1>}</div>
    </div>
  );
};

export default ScrollBar;
