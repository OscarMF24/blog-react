import PropTypes from 'prop-types';

import ButtonSubmit from '../../ui/forms/ButtonSubmit';

function DeletePostForm({ post, onDeletedPost }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onDeletedPost(post._id);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <p>
                Seguro que deseas eliminar el post: <br /> 
                { post.title }
            </p>
            <div className="flex justify-end">
                <ButtonSubmit
                    type="submit"
                    className="bg-primary-red"
                >
                    Eliminar post
                </ButtonSubmit>
            </div>
        </form>
    );
}

DeletePostForm.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  onDeletedPost: PropTypes.func,
};

export default DeletePostForm;
