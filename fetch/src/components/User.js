import { useEffect, useState } from "react";

function Users () {
 const [users, setUsers] = useState([]);
 const [isLoading, setIsLoading] = useState(true);

    useEffect (() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json())
        .then((data) => setUsers(data))
        .catch((e) => console.log(e))
        .finally(() => setIsLoading(false))
        

    }, []) 

    
    return (
        <div>
            <h1>USERS</h1>
            <h3>{isLoading && <div className="loading"> Loading...</div>}
            </h3>
            {
            users.map(user => <div key={user.id}>{user.name}</div> )
            }
        </div>
    )
};
export default Users;