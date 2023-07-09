import { React, useEffect, useState } from "react";
import axios from 'axios';
import UserList from "../components/UserList";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";

const User = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams(); // src/routes.js 에서 user의 path에 :{변수값} 해당 변수값을 똑같이 써줘야함


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' +id)
            .then((response) => {
                // console.log(response)
                setUser(response.data);
                setLoading(false);
            });
    }, []);

    const userDetail = loading ? <Spinner /> : (
        <div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
        </div>
    )

    return (
        <>
            <h1>User 정보</h1>
            { userDetail }
        </>
    )
}

export default User;