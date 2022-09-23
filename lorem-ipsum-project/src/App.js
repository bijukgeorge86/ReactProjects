import React from 'react';
import data from './data';
import './App.css';
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Hello');
        console.log(typeof count);
        let amount = parseInt(count);
        console.log(typeof amount + 'after parsing');
        if (count <= 0) {
            amount = 1;
        }
        if (count > 9) {
            amount = 8;
        }
        setText(data.slice(0, amount));
    };
    return (
        <section className="section-center">
            <h4>Loreum Ipsum Project</h4>
            <form className="lorem-form" onSubmit={handleSubmit}>
                <label htmlFor="amount">paragraphs:</label>
                <input
                    type="number"
                    name="amount"
                    id="amount"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                />
                <button type="submit" className="btn">
                    Generate
                </button>
            </form>
            <article className="lorem-text">
                {/* <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consequuntur, magnam.
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consequuntur, magnam.
                </p> */}
                {text.map((item, index) => {
                    return <p key={index}>{item}</p>;
                })}
            </article>
        </section>
    );
}

export default App;
