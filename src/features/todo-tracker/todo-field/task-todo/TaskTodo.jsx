import './taskTodo.scss';

import layer from '../../../../assets/layer.png';
import box from '../../../../assets/box.png';
import checked from '../../../../assets/check.png';

function TaskTodo({ task, id, isTaskDone, deleteTask, toggleTaskStatus }) {

    const taskStatusImg = isTaskDone ? checked : layer;
    const completedTaskStyle = isTaskDone ? { textDecoration: 'line-through', color: 'grey' } : null;

    return (
        <div className='todo'>
            <div className='todo-wrapper'>
                <img
                    onClick={() => toggleTaskStatus(id, task, isTaskDone)}
                    className='todo-layer'
                    src={taskStatusImg}
                    alt='chekbox' />
                <div style={completedTaskStyle} className='todo-text'>{task}</div>
            </div>
            <img
                onClick={() => deleteTask(id)}
                className='todo-box'
                src={box}
                alt='trash box' />
        </div>
    );
}

export default TaskTodo;