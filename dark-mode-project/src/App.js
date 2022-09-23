import React, { useEffect, useState } from 'react';
import Article from './Article';
import data from './data';

function App() {
    const getStorageTheme = () => {
        let theme = 'light-theme';
        if (localStorage.getItem('theme')) {
            theme = localStorage.getItem('theme');
        }
        return theme;
    };
    const [theme, setTheme] = useState(getStorageTheme());
    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    };
    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);
    return (
        <main>
            <nav>
                <div className="nav-center">
                    <h1>Overreacted</h1>
                    <button className="btn" onClick={toggleTheme}>
                        Toggle
                    </button>
                </div>
            </nav>
            <section className="articles">
                {data.map((item) => {
                    return <Article key={item.id} {...item} />;
                })}
            </section>
        </main>
    );
}

export default App;
