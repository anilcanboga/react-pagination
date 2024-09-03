import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Sayfa başına gösterilecek öğe sayısı

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${itemsPerPage}`
      );
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [currentPage, itemsPerPage]);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      {/* Pagination */}
      <div>
        {Array.from({ length: Math.ceil(100 / itemsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
