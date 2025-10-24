import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const ApiData: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [visiblePosts, setVisiblePosts] = useState(10);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const loadMore = () => {
    setVisiblePosts(prev => prev + 10);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <Card title="API Data - Posts" className="mb-6">
        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search posts..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm sm:text-base"
          />
          <Button onClick={() => void fetchPosts()} className="w-full sm:w-auto">
            {loading ? 'Loading...' : 'Refresh'}
          </Button>
        </div>

        {error && (
          <div className="text-red-500 mb-4 p-3 bg-red-100 dark:bg-red-900 rounded-md text-sm sm:text-base">
            Error: {error}
          </div>
        )}

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPosts.slice(0, visiblePosts).map(post => (
            <Card key={post.id} className="p-4 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-base sm:text-lg mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 line-clamp-3">{post.body}</p>
              <span className="text-xs text-gray-500">User ID: {post.userId}</span>
            </Card>
          ))}
        </div>

        {filteredPosts.length > visiblePosts && (
          <div className="text-center mt-6">
            <Button onClick={loadMore} className="px-6 py-2">Load More</Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ApiData;
