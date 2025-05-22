import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
    const [user] = useState({
        name: 'Имя пользователя',
        email: 'user@example.com'
    });

    return (
        <div className="profile_page">
            <div className="profile_container">
                <h2>Ваш профиль</h2>
                <div className="profile_info">
                    <div className="info_group">
                        <label>Имя:</label>
                        <p>{user.name}</p>
                    </div>
                    <div className="info_group">
                        <label>Email:</label>
                        <p>{user.email}</p>
                    </div>
                </div>
                <button className="edit_profile_button">
                    Редактировать профиль
                </button>
            </div>
        </div>
    );
};

export default Profile; 