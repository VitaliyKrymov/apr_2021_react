import {useEffect, useState} from "react";
import User from "../user/User";
export default function Users() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(usersfromServer => { setUsers(usersfromServer)
                console.log(usersfromServer);  }); }, []);
    return ( <div>
            {users.map(user => <User item={user}/>)}
        </div> );
}