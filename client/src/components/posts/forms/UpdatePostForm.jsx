import { useState } from 'react';

import PropTypes from 'prop-types';

import Input from '../../ui/forms/Input';
import Label from '../../ui/forms/Label';
import TextAreaInput from '../../ui/forms/TextAreaInput';
import ButtonSubmit from '../../ui/forms/ButtonSubmit';

function UpdatePostForm({ post, onUpdatePost }) {
    const [title, setTitle] = useState(post.title);
    const [description, setDescription] = useState(post.description);
    const [author, setAuthor] = useState(post.author);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdatePost({ _id: post._id, title, author, description });
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col justify-start w-full gap-1">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-start w-full gap-1">
          <Label htmlFor="author">Autor:</Label>
          <Input
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col justify-start w-full gap-1">
          <Label htmlFor="description">Descripción</Label>
          <TextAreaInput
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <ButtonSubmit type="submit">Update post</ButtonSubmit>
        </div>
      </form>
    );
}

UpdatePostForm.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  onUpdatePost: PropTypes.func,
};

export default UpdatePostForm;
