import { Transition, TransitionGroup } from 'react-transition-group';

import Skeleton from './skeleton/Skeleton';
import TaskTodo from './task-todo/TaskTodo';

const duration = 200;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

function TodoField({ tasks, deleteTask, toggleTaskStatus }) {

    const content = tasks.length > 0 ?
        <TransitionGroup>
            {tasks.map((item, i) => {
                return <Transition appear={true} in={true} timeout={duration} key={i}>
                    {state => (
                        <div
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}>
                            <TaskTodo
                                isTaskDone={item.isTaskDone}
                                toggleTaskStatus={toggleTaskStatus}
                                deleteTask={deleteTask}
                                id={item._id}
                                key={i}
                                task={item.task} />
                        </div>
                    )}
                </Transition>
            })}
        </TransitionGroup> :
        <Skeleton />

    return (
        <div>
            {content}
        </div>
    );
}

export default TodoField;