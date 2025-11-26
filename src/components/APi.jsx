import React, { useState, useEffect } from "react";

export default function ApiData() {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const limit = 12; // items per page

  const [search, setSearch] = useState("");

  // Fetch data from a public API
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        setData(json);
        setDisplayData(json);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Filter search results
  useEffect(() => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setDisplayData(filtered);
    setPage(1); // Reset to page 1 after search
  }, [search, data]);

  // Pagination calculations
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginated = displayData.slice(start, end);
  const totalPages = Math.ceil(displayData.length / limit);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">API Data</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search posts..."
        className="w-full mb-4 p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Loading State */}
      {loading && (
        <p className="text-center text-gray-500 dark:text-gray-400">
          Loading...
        </p>
      )}

      {/* Error State */}
      {error && (
        <p className="text-center text-red-500">Error: {error}</p>
      )}

      {/* Display Data Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginated.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-white dark:bg-gray-800 shadow rounded border dark:border-gray-700"
            >
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {!loading && !error && displayData.length > 0 && (
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
          >
            Previous
          </button>

          <p className="text-gray-500 dark:text-gray-400">
            Page {page} of {totalPages}
          </p>

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
