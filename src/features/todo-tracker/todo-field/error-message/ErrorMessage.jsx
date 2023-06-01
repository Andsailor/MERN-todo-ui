import './errorMessage.scss'

function ErrorMessage() {
    return (
        <div className='error'>
            <iframe
                src='https://giphy.com/embed/Rkis28kMJd1aE'
                width='480'
                height='317'
                frameBorder="0"
                className='giphy-embed'
                allowFullScreen>
            </iframe>
            <p><a href='https://giphy.com/gifs/angry-broken-computers-Rkis28kMJd1aE'></a></p>
            Something went wrong... <br />
            Please, try again
        </div>
    );
}

export default ErrorMessage;