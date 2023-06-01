import './todoTracker.scss';

import TodoField from './todo-field/TodoField';
import TodoStats from './todo-stats/TodoStats';

function TodoTracker({ tasks, deleteTask, toggleTaskStatus }) {

    const tasksDone = tasks.filter(task => task.isTaskDone === true);

    return (
        <div className="tracker">
            <TodoStats tasksAtAll={tasks.length} tasksDone={tasksDone.length} />
            <div className='tracker-content'>
                <TodoField tasks={tasks} deleteTask={deleteTask} toggleTaskStatus={toggleTaskStatus} />
            </div>
        </div>
    );
}

export default TodoTracker;