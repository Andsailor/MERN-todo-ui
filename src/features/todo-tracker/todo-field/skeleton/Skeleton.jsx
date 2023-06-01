import clipboard from '../../../../assets/Clipboard.png'

import './skeleton.scss'

function Skeleton() {
    return (
        <div className='skeleton'>
            <img className='skeleton-image' src={clipboard} alt='clipboard for empty todo list' />
            <div className='skeleton-message'>
                <span>Todo-list is empty</span> <br />
                Please add some tasks to track it
            </div>
        </div>
    );
}

export default Skeleton;