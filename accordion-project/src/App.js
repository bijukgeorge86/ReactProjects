//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import data from './data';
import Question from './Question';

function App() {
    const [questions, setQuestions] = useState(data);
    return (
        <main>
            <div className="container">
                <h4>questions and answers about login || Accordion Project</h4>

                <section className="info">
                    {questions.map((question) => {
                        return <Question key={question.id} {...question} />;
                    })}
                </section>
            </div>
        </main>
    );
}

export default App;
