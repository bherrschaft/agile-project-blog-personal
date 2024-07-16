import React from 'react';

const Pagination = ({ currentPage, totalPosts, postsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={currentPage === index + 1 ? 'active' : ''}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
