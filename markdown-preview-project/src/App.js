import React from 'react';
import './App.css';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
    const [markdown, setMarkdown] = useState('## Markdown Preview');
    return (
        <main>
            <section className="markdown">
                <textarea
                    className="input"
                    value={markdown}
                    onChange={(e) => setMarkdown(e.target.value)}
                ></textarea>
            </section>
            <article className="result">
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </article>
        </main>
    );
}

export default App;
