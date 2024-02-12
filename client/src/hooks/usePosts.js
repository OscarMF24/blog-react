import { useState, useEffect, useCallback } from 'react';
import { getPosts, createPost, updatePost, deletePost } from '../services/apiPostService';

export const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [alert, setAlert] = useState({ message: '', type: '' });

    // Cargar posts
    const loadPosts = useCallback(async () => {
        if (isOnline) {
            try {
                const fetchedPosts = await getPosts();
                setPosts(fetchedPosts);
                localStorage.setItem('posts', JSON.stringify(fetchedPosts));
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        } else {
            const storedPosts = localStorage.getItem('posts');
            if (storedPosts) {
                setPosts(JSON.parse(storedPosts));
            }
        }
    }, [isOnline]);

    useEffect(() => {
        loadPosts();

        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, [loadPosts]);

    // Crear post
    const handleCreatePost = async (newPost) => {
        try {
            await createPost(newPost);
            loadPosts();
            setAlert({ message: 'Post creado correctamente', type: 'success' });
        } catch (error) {
            console.error("Error creating post:", error);
            setAlert({ message: 'Error creando el post', type: 'error' });
        }
    };

    // Actualizar post
    const handleUpdatePost = async (updatedPost) => {
        try {
            await updatePost(updatedPost);
            loadPosts();
            setAlert({ message: 'Post actualizado correctamente', type: 'success' });
        } catch (error) {
            setAlert({ message: 'Error al actualizar el post', type: 'error' });
        }
    };

    // Eliminar post
    const handleDeletePost = async (postId) => {
        try {
            await deletePost(postId);
            loadPosts();
            setAlert({ message: 'Post eliminado correctamente', type: 'success' });
        } catch (error) {
            setAlert({ message: 'Error al eliminar el post', type: 'error' });
        }
    };

    const setCustomAlert = (message, type) => {
        setAlert({ message, type });
    };

    return {
        posts,
        isOnline,
        handleCreatePost,
        handleUpdatePost,
        handleDeletePost,
        alert,
        setCustomAlert
    };
};
