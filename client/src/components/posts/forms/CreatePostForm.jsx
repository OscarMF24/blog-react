import { useState } from 'react';
import { createPost } from '../../../services/apiPostService';

import PropTypes from 'prop-types';

import Input from '../../ui/forms/Input';
import Label from '../../ui/forms/Label';
import TextAreaInput from '../../ui/forms/TextAreaInput';
import ButtonSubmit from '../../ui/forms/ButtonSubmit';

function CreatePostForm({ onPostCreated }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const userId = 1;

    const handleSubmit = () => {
        event.preventDefault(); 
        const newPost = { title, description, author, userId };
        onPostCreated(newPost);
        setTitle("");
        setAuthor("");
        setDescription("");
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col justify-start w-full gap-1">
          <Label htmlFor="title">Title:</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
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
          <Label htmlFor="description">Descripción:</Label>
          <TextAreaInput
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-end">
          <ButtonSubmit type="submit">Create post</ButtonSubmit>
        </div>
      </form>
    );
}

CreatePostForm.propTypes = {
    onPostCreated: PropTypes.func
};

export default CreatePostForm;