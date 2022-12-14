//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const removeTours = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    };

    const fetchTours = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const tours = await response.json();
            //console.log(tours);
            setLoading(false);
            setTours(tours);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTours();
    }, []);

    if (loading) {
        return (
            <main>
                <h4>Tours Project</h4>
                <Loading />
            </main>
        );
    }
    if (tours.length === 0) {
        return (
            <main>
                <div className='title'>
                    <h2>No Tour Left</h2>
                    <button className='btn' onClick={() => fetchTours()}>
                        Refresh
                    </button>
                </div>
            </main>
        );
    }
    return (
        <main>
            <Tours tours={tours} removeTours={removeTours} />
        </main>
    );
}

export default App;
