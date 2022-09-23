import React from 'react';
import { FaBars } from 'react-icons/fa';
import { AppContext, useGlobalContext } from './context';

const Home = () => {
    //const data = useContext(AppContext);
    //const data = useGlobalContext(AppContext);
    const { openSidebar, openModal } = useGlobalContext(AppContext);
    //console.log(data);
    return (
        <main>
            <button className="sidebar-toggle" onClick={openSidebar}>
                <FaBars />
            </button>
            <button className="btn" onClick={openModal}>
                Show Modal
            </button>
        </main>
    );
};

export default Home;
