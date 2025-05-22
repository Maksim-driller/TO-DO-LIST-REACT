import React from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Tasks from './components/Tasks'
import Profile from './components/Profile'

const App = () => {
  return (
    <div className="app">
      <nav className="navigation">
        <Link to="/" className="nav-link">Главная</Link>
        <Link to="/register" className="nav-link">Регистрация</Link>
        <Link to="/login" className="nav-link">Вход</Link>
        <Link to="/tasks" className="nav-link">Задачи</Link>
        <Link to="/profile" className="nav-link">Профиль</Link>
      </nav>
      <Routes>
        <Route path="/" element={
          <div className='main_page'>
            <div className='header_page'>
              <div className='header_text'>Добро пожаловать в планировщик задач!</div>
              <div className='header_card_container'>
                <div className='header_card'>
                  <div className='header_card_text'>
                    Удобное планирование задач
                  </div>
                </div>
                <div className='header_card'>
                  <div className='header_card_text'>
                    Быстрая регистрация
                  </div>
                </div>
                <div className='header_card'>
                  <div className='header_card_text'>
                    Удобный и красивый интерфейс
                  </div>
                </div>
              </div>
            </div>
          </div>
        } />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
