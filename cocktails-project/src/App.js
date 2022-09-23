import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Pages
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
// Components
import Navbar from './components/Navbar';
function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route
                        path="/cocktail/:id"
                        element={<SingleCocktail />}
                    ></Route>
                    <Route path="*" element={<Error />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
