import './Profile.css';

const Profile = (props) => {
    return (
        <div className='profile'>
            <h3 className="profile-header">Profile</h3>
            <div className="profile-items">
                <h5 className="notifications-title">Name</h5>
                <div>
                    <p>{props.name}</p>
                </div>
                <h5 className="notifications-title">Email</h5>
                <div>
                    <p>{props.email}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;