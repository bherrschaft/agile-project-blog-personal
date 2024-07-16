import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="content">{post.content}</div>
      <div className="meta">
        <span>{post.date} by {post.author}</span>
        <span>Tags: {post.tags}</span>
        <span>Likes: {post.likes}</span>
      </div>
    </div>
  );
};

export default Post;
