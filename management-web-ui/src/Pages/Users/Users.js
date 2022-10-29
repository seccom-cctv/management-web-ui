import { AwesomeButton } from "react-awesome-button";
import './Users.css';

const Users = () => {
    return (
        <div className='users'>
            <h2 className='users-header'>Manage Users</h2>
            <div className='users-list'>
                <div className='users-list-item'>
                    <p>User 1</p>
                    <AwesomeButton type="primary">Edit</AwesomeButton>
                </div>
                <div className='users-list-item'>
                    <p>User 1</p>
                    <AwesomeButton type="primary">Edit</AwesomeButton>
                </div>
                <div className='users-list-item'>
                    <p>User 1</p>
                    <AwesomeButton type="primary">Edit</AwesomeButton>
                </div>
                <div className='users-list-item'>
                    <p>User 1</p>
                    <AwesomeButton type="primary">Edit</AwesomeButton>
                </div>
            </div>
        </div>
    )
}

export default Users;