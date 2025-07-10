import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

function ApiData() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Fetch data
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setPosts(data);
        setFilteredPosts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Search filter
  useEffect(() => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPosts(filtered);
    setCurrentPage(1); // Reset to page 1 on search
  }, [search, posts]);

  // Calculate pagination
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  if (loading) return <p className="text-center text-lg font-semibold text-orange-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500 font-semibold">Error: {error}</p>;

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-orange-600">Public API Posts</h2>

      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-800 dark:border-gray-600"
      />

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {currentPosts.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            className="bg-gradient-to-tr from-orange-100 to-orange-200 dark:from-gray-800 dark:to-gray-700"
          >
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {post.body}
            </p>
          </Card>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-orange-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span className="font-semibold">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-orange-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ApiData;
