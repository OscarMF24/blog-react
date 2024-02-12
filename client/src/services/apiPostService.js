const baseUrl = "http://localhost:3000/api";

// Función para obtener todos los posts del blog
export const getPosts = async () => {
    try {
        const response = await fetch(`${baseUrl}/posts`);
        if (!response.ok) {
            throw new Error('Error fetching posts');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error getPost: ", error.message);
        throw error;
    }
};

// Función para crear posts del blog
export const createPost = async (post) => {
    try {
        const response = await fetch(`${baseUrl}/posts`, {
          method: "POST",
          body: JSON.stringify(post),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });

        if (!response.ok) {
            throw new Error('Error fetching posts');
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error inside createPost: ", error.message);
        throw error;
    }
};

// Función para actualizar posts del blog
export const updatePost = async (post) => {
    try {
        const response = await fetch(`${baseUrl}/post/${post._id}`, {
            method: 'PATCH',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if (!response.ok) {
            throw new Error('Error updating post');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error inside updatePost: ", error.message);
        throw error;
    }
};

// Función para actualizar posts del blog
export const deletePost  = async (post) => {
    try {
        const response = await fetch(`${baseUrl}/post/${post}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });

        if (!response.ok) {
            throw new Error('Error deleted post');
        }

        return;

    } catch (error) {
        console.error("Error inside deletePost: ", error.message);
        throw error; 
    }
};