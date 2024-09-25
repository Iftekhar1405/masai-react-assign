import React, { useState, useEffect, useCallback, memo } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    
    
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval); 
    }, []);

    return (
        <div>
            <h2>Timer: {seconds} seconds</h2>
        </div>
    );
};

const Post = memo(({ post }) => {
    console.log('post');
    
    console.log(`Rendering post: ${post}`);
    return <li>{post}</li>;
});

const AddPost = ({ addPost }) => {
    console.log('addpost');
    
    const [newPost, setNewPost] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPost.trim() === '')
        addPost(newPost);
        setNewPost('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Enter new post"
            />
            <button type="submit">Add Post</button>
        </form>
    );
};

const App = () => {
    const [posts, setPosts] = useState([]);

    const addPost = useCallback((post) => {
        setPosts((prevPosts) => [...prevPosts, post]);
    }, []);

    return (
        <div>
            <Timer />
            <h3>Posts</h3>
            <AddPost addPost={addPost} />
            <ul>
                {posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </ul>
        </div>
    );
};

export default App;
