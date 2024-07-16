import React, { useState } from 'react';
import CreatePost from '../components/CreatePost';
import PostFeed from '../components/PostFeed';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const handlePostCreated = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <CreatePost onPostCreated={handlePostCreated} />
      <PostFeed />
    </div>
  );
};

export default HomePage;
