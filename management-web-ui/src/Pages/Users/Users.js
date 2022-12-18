import { AwesomeButton } from "react-awesome-button";
import './Users.css';
import { useAuth } from "react-oidc-context";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ScreenNavbar from "../../components/Navbar/Navbar";

const Users = () => {
    const auth = useAuth();
    const location = useLocation();
    const [usersList, setUsersList] = useState();

    useEffect(() => {
        let result = []
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.user?.access_token}`
            },
        };
        fetch('http://localhost:8082/v1/company/?id=' + location.state.company[0].id, requestOptions)
            .then(response => response.json())
            .then(data => {
                result.push(data[0].managers);
                console.log(data[0].managers);
                let users = [];
                for (let i = 0; i < data[0].managers.length; i++)
                    users.push(
                        <div className='users-list-item'>
                            <p>{data[0].managers[i].idp_id}</p>
                            <AwesomeButton type="primary">Edit</AwesomeButton>
                        </div>
                    )
                setUsersList(users);
            });
        // eslint-disable-next-line
    }, [auth.user?.access_token])

    return (
        <>
        <ScreenNavbar />
        <div className='users'>
            <h2 className='users-header'>Manage Users</h2>
            <div className='users-list'>
                {usersList}
            </div>
        </div>
        </>
    )
}

export default Users;