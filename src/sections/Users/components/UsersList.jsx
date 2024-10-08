import { useState, useEffect } from "react"
import UserListItem from "./UsersListItem";


function UserList(){
    const url = "https://boolean-uk-api-server.fly.dev/PandersPanda/contact"
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url)
            const jsonData = await response.json();
            setData(jsonData);
        };
        fetchData();
    }, [])

    //console.log(data)
    return (
        <div className="scroll-container">
            <ul className="users-list">
                {data.map((userItem, i) => (
                    <UserListItem userItem={userItem} key={i}/>
                ))}
            </ul>
        </div>
    )
}

export default UserList