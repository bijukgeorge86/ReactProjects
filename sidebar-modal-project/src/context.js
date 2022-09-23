import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModelOpen, setIsModalOpen] = useState(false);
    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <AppContext.Provider
            value={{
                isModelOpen,
                isSidebarOpen,
                openSidebar,
                closeSidebar,
                openModal,
                closeModal,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

// custom hook

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
