import './todoStats.scss';

function TodoStats({ tasksAtAll, tasksDone }) {

    return (
        <div className='stats'>
            <div className='stats-all'>Tasks at all: <span>{tasksAtAll}</span></div>
            <div className='stats-done'>Tasks done: <span>{tasksDone} of {tasksAtAll}</span></div>
        </div>
    );
}

export default TodoStats;