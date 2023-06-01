import { useState } from 'react';
import useHttp from '../../../api/useHttp.hook';

import './todoAddForm.scss';

function TodoAddForm({ getAllTasks }) {

    const { request } = useHttp();

    const [task, setTask] = useState('');

    const addNewTask = (e) => {
        e.preventDefault();

        const todo = { task };

        request('http://localhost:5000/api/todos', 'POST', JSON.stringify(todo))
            .then(getAllTasks);

        setTask('');
    }

    return (
        <form onSubmit={(e) => addNewTask(e)} className='form'>
            <input
                className='form-input'
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder='Type task to track it'
                type='text' />
            <button
                disabled={task.length < 1}
                className='form-button'
                type='submit'>
                Track
            </button>
        </form>
    );
}

export default TodoAddForm;