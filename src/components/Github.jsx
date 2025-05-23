import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

const Github = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStarredRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/dpakdas10/starred?sort=updated&per_page=6');
        if (!response.ok) {
          throw new Error('Failed to fetch starred repositories');
        }
        const data = await response.json();
        setRepos(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStarredRepos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 min-h-[400px] flex items-center justify-center">
        Error: {error}
      </div>
    );
  }

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        Github <span className='text-neutral-500'>Repos.</span>
      </motion.h1>

      {repos.length === 0 ? (
        <div className="text-center text-gray-400 min-h-[200px] flex items-center justify-center">
          No starred repositories found
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {repos.map((repo) => (
            <motion.div
              key={repo.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="bg-transparent rounded-lg p-6 hover:bg-neutral-800/30 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <FaGithub className="text-2xl mr-2 text-white" />
                <h3 className="text-xl font-semibold text-white truncate">
                  {repo.full_name}
                </h3>
              </div>

              <p className="text-gray-400 mb-4 line-clamp-2">
                {repo.description || 'No description available'}
              </p>

              <div className="flex flex-wrap gap-4 mb-4">
                {repo.language && (
                  <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm">
                    {repo.language}
                  </span>
                )}
              </div>

              <div className="flex justify-between text-sm text-gray-400">
                <div className="flex items-center">
                  <FaStar className="mr-1" />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center">
                  <FaCodeBranch className="mr-1" />
                  <span>{repo.forks_count}</span>
                </div>
              </div>

              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-md border border-gray-400 bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-800 px-4 py-2 transition-colors duration-300"
              >
                View Repository
              </a>
            </motion.div>
          ))}
        </div>
      )}

      <div className="text-center mt-8">
        <a
          href="https://github.com/dpakdas10?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors duration-300"
        >
          <FaGithub className="mr-2" />
          View All Repositories
        </a>
      </div>
    </div>
  );
};

export default Github; 