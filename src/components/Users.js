import React, { useState } from "react";

function Users() {

    const [users, setusers] = useState([])
    const [postText, setPostText] = useState("");
    const [posts, setPosts] = useState([]);

    const getUsers = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await res.json()
        setusers(data)
    }

    const hideUsers = () => {
        setusers([])
    }

    const handlePostTextChange = (event) => {
        setPostText(event.target.value);
    };

    const handlePostSubmit = () => {
        setPosts([...posts, postText]);
        setPostText("");
    };

    const deletePost = (index) => {
        const filteredData = posts.filter((post, i) => i !== index);
        setPosts(filteredData);
    };
   
    return (
        <div>
            <h2>Users</h2>
            {users.length === 0 ? <button onClick={getUsers}>Get Users</button> : null}
            {users.length > 0 && (
                <div>
                    <ul>
                        {users.map((user, index) => (
                            <li key={index}>{user.name}</li>
                        ))}
                    </ul>
                    <button onClick={hideUsers}>Hide Users</button>
                </div>
            )}

            <h2>Posts</h2>
            <input type="text" value={postText} onChange={handlePostTextChange} />
            <button onClick={handlePostSubmit}>Post</button>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>{post} <button onClick={() => deletePost(index)}>Delete</button></li>
                ))}
            </ul>
        </div>
    )
}

export default Users