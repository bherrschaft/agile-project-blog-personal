import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = ({ onPostCreated }) => {
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/posts', {
        content,
        tags,
        author: 'default_author' // Replace with dynamic user data when available
      });
      onPostCreated(response.data);
      setContent('');
      setTags('');
    } catch (error) {
      console.error('Error creating post', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your post here..."
        maxLength="280"
        required
      />
      <input
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Tags (comma-separated)"
        required
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default CreatePost;
