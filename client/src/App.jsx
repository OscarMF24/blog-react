import { useState } from 'react';
import { usePosts } from './hooks/usePosts';

import imgFondoApplication from './assets/img/fondo-blog.jpg';
import Title from './components/ui/Title';
import Input from './components/ui/forms/Input';
import ButtonPrimary from './components/ui/ButtonPrimary';
import PostList from './components/posts/PostList';
import Modal from './components/ui/Modal';
import ModalView from './components/ui/ModalView';
import CreatePostForm from './components/posts/forms/CreatePostForm';
import UpdatePostForm from './components/posts/forms/UpdatePostForm';
import DeletePostForm from './components/posts/forms/DeletePostForm';
import PostDetails from './components/posts/PostDetails';
import Alert from './components/ui/Alert';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectPost, setSelectPost] = useState(null);
  
  const { posts, isOnline, handleCreatePost, handleUpdatePost, handleDeletePost, alert, setCustomAlert } = usePosts();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePostCreated = async (newPost) => {
    await handleCreatePost(newPost);
    setIsCreating(false);
  };

  const handlePostUpdated = async (updatedPost) => {
    await handleUpdatePost(updatedPost);
    setIsEditing(false);
  };

  const handlePostDeleted = async (deletedPost) => {
    await handleDeletePost(deletedPost); 
    setIsDeleting(false);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description?.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  const handleAction = (action) => {
    if (!isOnline) {
      setCustomAlert('Esta acción no está disponible en modo offline.', 'error');
      return;
    }

    switch(action) {
      case 'create':
        setIsCreating(true);
        break;
      case 'edit':
        setIsEditing(true);
        break;
      case 'delete':
        setIsDeleting(true);
        break;
      default:
        console.log('Acción no reconocida');
    }
  };

  return (
    <main className="h-screen w-screen">
      <Alert message={alert.message} type={alert.type} />
      <section className="fixed inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src={imgFondoApplication}
          alt="Fondo del blog"
        />
      </section>
      <section className="min-h-screen bg-[#1F3668]/50">
        <div className="container mx-auto py-10 space-y-6 px-3">
          <Title>Blog</Title>

          <div className="flex flex-col sm:flex-row justify-end gap-4">
            <div>
              <Input
                type="search"
                name="search"
                id="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <ButtonPrimary onClick={() => handleAction("create")}>
              Nuevo post
            </ButtonPrimary>
          </div>

          <PostList
            posts={filteredPosts}
            onEdit={(post) => {
              setSelectPost(post);
              handleAction("edit");
            }}
            onDelete={(post) => {
              setSelectPost(post);
              handleAction("delete");
            }}
            onDetailsExpand={(post) => {
              setSelectPost(post);
              setIsDetailsExpanded(true);
            }}
          />
        </div>
      </section>

      {isCreating && (
        <Modal
          title="Nuevo post"
          isOpen={isCreating}
          onClose={() => setIsCreating(false)}
        >
          <CreatePostForm onPostCreated={handlePostCreated} />
        </Modal>
      )}

      {isEditing && (
        <Modal
          title="Actualizar Post"
          isOpen={isEditing}
          onClose={() => setIsEditing(false)}
        >
          <UpdatePostForm post={selectPost} onUpdatePost={handlePostUpdated} />
        </Modal>
      )}

      {isDeleting && (
        <Modal
          title="Eliminar Post"
          isOpen={isDeleting}
          onClose={() => setIsDeleting(false)}
        >
          <DeletePostForm post={selectPost} onDeletedPost={handlePostDeleted} />
        </Modal>
      )}

      {isDetailsExpanded && (
        <ModalView
          title="Detalle del post"
          isOpen={isDetailsExpanded}
          onClose={() => setIsDetailsExpanded(false)}
        >
          <PostDetails post={selectPost} />
        </ModalView>
      )}
    </main>
  );
}

export default App;
