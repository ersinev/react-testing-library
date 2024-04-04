import React, { useState } from "react";

function Users(){

    const [users, setusers] = useState([])

    const getUsers = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await res.json()
        setusers(data)
    } 

    const hideUsers = () => {
        setusers([])
    }

    return(
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
        </div>
    )
}

export default Users