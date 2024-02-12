import PropTypes from 'prop-types';
import TiteSmall from '../ui/TitleSmall';
import DeletedIcon from '../ui/icons/DeletedIcon';
import EditIcon from '../ui/icons/EditIcon';

function PostListItem({post, index, onEdit, onDelete, onDetailsExpand}){
    
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + "...";
        }
        return text;
    };

    return(
        <article key={post._id || index} className="p-4 space-y-4 bg-white drop-shadow-md rounded-lg">
            <section className="flex justify-between gap-2">
                <TiteSmall className="truncate">
                    {post.title}
                </TiteSmall>
                <div className="flex gap-2">
                    <button
                        onClick={() => onEdit(post)}
                    >
                        <EditIcon 
                            className="w-4 h-4 stroke-primary-blue"
                        />
                    </button>
                    <button
                        onClick={() => onDelete(post)}
                    >
                        <DeletedIcon 
                            className="w-4 h-4 stroke-primary-red"
                        />
                    </button>
                </div>
            </section>
            <hr />
            <section className="h-20 overflow-y-hidden">
                <p className="text-[#333333]">
                    {truncateText(post.description, 70)}
                </p>
            </section>
            <button 
                onClick={() => onDetailsExpand(post)}
                className="transition w-full font-montserrat ease-in-out delay-150 bg-gradient-to-r from-primary-blue to-secondary-blue h-10 text-white font-medium text-sm px-6 rounded hover:-translate-y-1 hover:scale-105 hover:opacity-80 duration-300"
            >
                Ver post
            </button>
        </article>
    );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onDetailsExpand: PropTypes.func,
};

export default PostListItem;