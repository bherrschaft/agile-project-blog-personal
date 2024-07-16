import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post';
import Pagination from './Pagination';

const PostFeed = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 5;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/posts?page=${currentPage}&limit=${POSTS_PER_PAGE}`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts', error);
      }
    };

    fetchPosts();
  }, [currentPage]);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <Pagination
        currentPage={currentPage}
        totalPosts={posts.length}
        postsPerPage={POSTS_PER_PAGE}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PostFeed;
