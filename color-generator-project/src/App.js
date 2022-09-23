import React from 'react';
import './App.css';
import SingleColor from './SingleColor';
import Values from 'values.js';
import { useState } from 'react';

function App() {
    const [color, setColor] = useState('');
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values('#F15025').all(2));
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('heloo');
        try {
            let colors = new Values(color).all(10);
            setList(colors);
            setError(false);
            //console.log(colors);
        } catch (error) {
            setError(true);
            console.log(error);
        }
    };
    return (
        <>
            <section className="container">
                <h4>Color Generator</h4>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder="#f15025"
                        className={`${error ? 'error' : null}`}
                    />
                    <button className="btn" type="submit">
                        Submit
                    </button>
                </form>
            </section>
            <section className="colors">
                <h4>List Goes here</h4>
                {list.map((color, index) => {
                    //console.log(color);
                    //const hex = color.hex;
                    return (
                        <SingleColor
                            div
                            key={index}
                            {...color}
                            index={index}
                            hexColor={color.hex}
                        />
                    );
                })}
            </section>
        </>
    );
}

export default App;
