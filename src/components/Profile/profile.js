import React from "react";
import './profile.css';
import { Link } from 'react-scroll';
import profilePhoto from '../../assets/profilePhoto.jpg'

const Profile = () => {
    return(
        <div className="bigBlock">
            <img src={profilePhoto}/>
            <div className="list">
                <Link className="listItem">Github</Link>
                <Link className="listItem">LinkedIn</Link>
                <Link className="listItem">Tableau</Link>
                <Link className="listItem">Email</Link>
            </div>
        </div>
    )
}

export default Profile;