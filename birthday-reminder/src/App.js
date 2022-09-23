//import logo from './logo.svg'
import { useState } from 'react';
import './App.css';
import { data } from './data';
import List from './List';

function App() {
    const [people, setPeople] = useState(data);
    return (
        <main>
            <section className='container'>
                <h3>{people.length} Birthday's Today</h3>
                <List people={people} />
                <button className='btn' onClick={() => setPeople([])}>
                    Clear All
                </button>
            </section>
        </main>
    );
}

export default App;
