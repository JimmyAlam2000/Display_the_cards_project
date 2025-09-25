import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data); // store all posts
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching posts:", err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container">
            <h1>Posts</h1>
            {loading ? (
                <p className="loading">Loading posts...</p>
            ) : (
                <div className="grid">
                    {posts.map((post) => (
                        <div className="card" key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <span>User ID: {post.userId}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
