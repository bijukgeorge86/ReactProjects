//import logo from './logo.svg';
import './App.css';
import Review from './Review';

function App() {
    return (
        <main>
            <div className='container'>
                <div className='title'>
                    <h2>Reviews Project</h2>
                    <div className='underline'></div>
                    <Review />
                </div>
            </div>
        </main>
    );
}

export default App;
