import { useState, useEffect } from 'react';
import useHttp from '../../api/useHttp.hook';

import './app.scss';

import Header from '../header/Header';
import TodoTracker from '../todo-tracker/TodoTracker';
import ErrorMessage from '../todo-tracker/todo-field/error-message/ErrorMessage';

function App() {

    const [tasks, setTasks] = useState([]);

    const { request, error } = useHttp();

    useEffect(() => {
        getAllTasks();
    }, []);

    const deleteTask = (id) => {
        request(`https://mern-todo-list-50k4jmxxf-andsailor.vercel.app/api/todos/${id}`, 'DELETE')
            .then(getAllTasks);
    }

    const getAllTasks = () => {
        request()
            .then(setTasks);
    }

    const toggleTaskStatus = (id, task, isTaskDone) => {
        request(`https://mern-todo-list-50k4jmxxf-andsailor.vercel.app/api/todos`, 'PUT', JSON.stringify({
            _id: id,
            task: task,
            isTaskDone: !isTaskDone,
            __v: 0
        }))
            .then(getAllTasks);
    }

    const todoTracker =
        !error ?
            <TodoTracker tasks={tasks} deleteTask={deleteTask} toggleTaskStatus={toggleTaskStatus} />
            : <ErrorMessage />;

    return (
        <div className='app'>
            <Header getAllTasks={getAllTasks} />
            {todoTracker}
        </div>
    );
}

export default App;