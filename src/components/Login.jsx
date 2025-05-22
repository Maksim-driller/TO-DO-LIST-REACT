import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь будет логика авторизации
        console.log("Login form submitted:", formData);
        navigate('/profile');
    };

    return (
        <div className="login_page">
            <div className="login_container">
                <h2>Вход</h2>
                <form className="login_form" onSubmit={handleSubmit}>
                    <div className="form_group">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="form_group">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Пароль"
                            required
                        />
                    </div>
                    <button type="submit" className="login_button">
                        Войти
                    </button>
                    <p className="register_link">
                        Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login
    