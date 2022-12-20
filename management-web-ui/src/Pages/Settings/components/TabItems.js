import './TabItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey, faLock, faBell } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const TabItems = (props) => {

    const [active, setActive] = useState("notifications");

    const selectChange = (value) => {
        switch (value) {
            case "profile":
                setActive("profile");
                break;
            case "password":
                setActive("password");
                break;
            case "security":
                setActive("security");
                break;
            case "notifications":
                setActive("notifications");
                break;
            default:
                return;
        }
    };

    return (
        <div className="tab-items">
            <ul className="tab-items-list">
                <li onClick={() =>  selectChange("profile")} className={active === "profile" ? "tab-items-list-item-active" : "tab-items-list-item"}>
                    <FontAwesomeIcon icon={faUser} className="tab-item-icon" />Profile
                </li>
                <li onClick={() => selectChange("password")} className={active === "password" ? "tab-items-list-item-active" : "tab-items-list-item"}>
                    <FontAwesomeIcon icon={faLock} className="tab-item-icon" />Password
                </li>
                <li onClick={() =>selectChange("security")} className={active === "security" ? "tab-items-list-item-active" : "tab-items-list-item"}>
                    <FontAwesomeIcon icon={faKey} className="tab-item-icon" />Security
                </li>
                <li onClick={() => selectChange("notifications")} className={active === "notifications" ? "tab-items-list-item-active" : "tab-items-list-item"}>
                    <FontAwesomeIcon icon={faBell} className="tab-item-icon " />Notification
                </li>
            </ul>
        </div>
    )
}

export default TabItems;