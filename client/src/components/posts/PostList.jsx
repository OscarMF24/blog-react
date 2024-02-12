import { useState } from 'react';

import PropTypes from 'prop-types';
import PostListItem from './PostListItem';

function PostList({ posts, onEdit, onDelete, onDetailsExpand }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <section>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 drop-shadow-sm items-start min-h-[60vh]">
                {currentPosts.map((post, index) => (
                    <div key={post._id || index} >
                        <PostListItem 
                            post={post}
                            index={index}
                            onEdit={onEdit}
                            onDelete={onDelete}
                            onDetailsExpand= {onDetailsExpand}
                        />
                    </div>
                ))}
            </section>
            <section className="mt-6 flex flex-wrap justify-end gap-2">
                {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, i) => i + 1).map(number => (
                    <button 
                        key={number} 
                        onClick={() => setCurrentPage(number)}
                        className={`rounded min-w-9 min-h-9 font-medium text-sm text-white ${
                            currentPage === number
                            ? "bg-primary-blue"
                            : "bg-[#8C8C8C]/80"
                        }`}
                    >
                        {number}
                    </button>
                ))}
            </section>
        </section>
    );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onDetailsExpand: PropTypes.func,
};

export default PostList;
