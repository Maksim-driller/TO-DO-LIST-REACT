import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
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
    console.log("Form submitted:", formData);
  };

  return (
    <div className="register_page">
      <div className="register_container">
        <h2>Регистрация</h2>
        <form className="register_form" onSubmit={handleSubmit}>
          <div className="form_group">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Имя пользователя"
              required
            />
          </div>
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
          <button type="submit" className="register_button">
            Зарегистрироваться
          </button>
          <p className="login_link">
            Уже есть аккаунт? <Link to="/login">Войти</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;