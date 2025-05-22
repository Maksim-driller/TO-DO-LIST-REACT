import React, { useState, useEffect } from 'react'
import './Tasks.css'

const Tasks = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Задача 1', completed: false },
        { id: 2, text: 'Задача 2', completed: false },
        { id: 3, text: 'Задача 3', completed: false }
    ]);
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const [newTaskText, setNewTaskText] = useState('');
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);
    const [editText, setEditText] = useState(''); 
    const [searchTask, setSearchTask] = useState('');

    useEffect(() => {
        setFilteredTasks(tasks);
    }, [tasks]);

    const handleAddTask = (e) => {
        e.preventDefault();
        if (newTaskText.trim()) {
            const newTask = {
                id: Date.now(),
                text: newTaskText.trim(),
                completed: false
            };
            setTasks([...tasks, newTask]);
            setNewTaskText('');
            setIsModalOpen(false);
        }
    };

    const handleEditTask = (e) => {
        e.preventDefault();
        if (editText.trim() && currentTask) {
            setTasks(tasks.map(task => 
                task.id === currentTask.id 
                    ? { ...task, text: editText.trim() }
                    : task
            ));
            setEditText('');
            setEditModalOpen(false);
            setCurrentTask(null);
        }
    }; 


    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
        setDeleteModalOpen(false);
    };

    const handleCompleteTask = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId
                ? { ...task, completed: !task.completed }
                : task
        ));
    };


    const handleSearchTask = (e) => {
        const searchValue = e.target.value;
        setSearchTask(searchValue);
        
        if (searchValue.trim() === '') {
            setFilteredTasks(tasks);
        } else {
            const filtered = tasks.filter(task => 
                task.text.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredTasks(filtered);
        }
    };

    return (
        <div className="tasks_page">
            <h2>Мои задачи</h2>
            <input
                className="search_task" 
                type="text"
                value={searchTask}
                onChange={handleSearchTask}
                placeholder="Поиск задач..."
            />
            <div className="tasks_list">
                <ul>
                    {filteredTasks.map(task => (
                        <li key={task.id} className={task.completed ? 'completed' : ''}>
                            <span className="task_text">{task.text}</span>
                            <div className="task_buttons">
                                <button 
                                    className="task_button edit"
                                    onClick={() => {
                                        setCurrentTask(task);
                                        setEditText(task.text);
                                        setEditModalOpen(true);
                                    }}
                                >
                                    ✎
                                </button>
                                <button 
                                    className="task_button delete"
                                    onClick={() => {
                                        setCurrentTask(task);
                                        setDeleteModalOpen(true);
                                    }}
                                >
                                    ×
                                </button>
                                <button 
                                    className="task_button complete"
                                    onClick={() => handleCompleteTask(task.id)}
                                >
                                    {task.completed ? '↩' : '✓'}
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                <button className="add_task_button" onClick={() => setIsModalOpen(true)}>
                    Добавить задачу
                </button>
            </div>

            {editModalOpen && (
                <div className="modal_overlay">
                    <div className="modal_content">
                        <h3>Редактировать задачу</h3>
                        <form onSubmit={handleEditTask}>
                            <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                placeholder="Введите новый текст задачи"
                                required
                            />
                            <div className="modal_buttons">
                                <button type="submit" className="modal_button submit">
                                    Сохранить
                                </button>
                                <button
                                    type="button"
                                    className="modal_button cancel"
                                    onClick={() => {
                                        setEditModalOpen(false);
                                        setCurrentTask(null);
                                        setEditText('');
                                    }}
                                >
                                    Отмена
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {deleteModalOpen && (
                <div className="modal_overlay">
                    <div className="modal_content">
                        <h3>Удалить задачу?</h3>
                        <p>Вы уверены, что хотите удалить задачу "{currentTask?.text}"?</p>
                        <div className="modal_buttons">
                            <button
                                className="modal_button delete"
                                onClick={() => handleDeleteTask(currentTask.id)}
                            >
                                Удалить
                            </button>
                            <button
                                className="modal_button cancel"
                                onClick={() => {
                                    setDeleteModalOpen(false);
                                    setCurrentTask(null);
                                }}
                            >
                                Отмена
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isModalOpen && (
                <div className="modal_overlay">
                    <div className="modal_content">
                        <h3>Добавить новую задачу</h3>
                        <form onSubmit={handleAddTask}>
                            <input
                                type="text"
                                value={newTaskText}
                                onChange={(e) => setNewTaskText(e.target.value)}
                                placeholder="Введите текст задачи"
                                required
                            />
                            <div className="modal_buttons">
                                <button type="submit" className="modal_button submit">
                                    Добавить
                                </button>
                                <button
                                    type="button"
                                    className="modal_button cancel"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Отмена
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Tasks 