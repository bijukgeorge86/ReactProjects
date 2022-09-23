import React from 'react';
import './App.css';
import List from './List';
import Alert from './Alert';
import { useState } from 'react';
import { useEffect } from 'react';

const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if (list) {
        return (list = JSON.parse(localStorage.getItem('list')));
    } else {
        return [];
    }
};

function App() {
    const [name, setName] = useState('');
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({
        show: false,
        msg: '',
        type: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('hello');
        if (!name) {
            //display alert
            showAlert(true, 'danger', 'Please enter value');
        } else if (name && isEditing) {
            // deal with edit
            setList(
                list.map((item) => {
                    if (item.id === editID) {
                        return { ...item, title: name };
                    }
                    return item;
                })
            );
            setName('');
            setEditID(null);
            setIsEditing(false);
            showAlert(true, 'success', 'item updated');
        } else {
            showAlert(true, 'success', 'Item Added to the list');
            const newItems = {
                id: new Date().getTime().toString(),
                title: name,
            };
            setList([...list, newItems]);
            setName('');
        }
    };
    const showAlert = (show = false, type = '', msg = '') => {
        setAlert({ show, type, msg });
    };
    const clearList = () => {
        showAlert(true, 'danger', 'List is Emptied');
        setList([]);
    };
    const editItem = (id) => {
        const specificItem = list.find((item) => item.id === id);
        setIsEditing(true);
        setEditID(id);
        setName(specificItem.title);
    };
    const removeItem = (id) => {
        showAlert(true, 'danger', 'Item removed from the List');
        setList(list.filter((item) => item.id !== id));
    };
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);
    return (
        <section className="section-center">
            <h4>Grocery Bud Project</h4>
            <form className="grocery-form" onSubmit={handleSubmit}>
                {alert.show && (
                    <Alert {...alert} removeAlert={showAlert} list={list} />
                )}
                <div className="form-control">
                    <input
                        type="text"
                        className="grocery"
                        placeholder="e.g. eggs"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit" className="submit-btn">
                        {isEditing ? 'edit' : 'submit'}
                    </button>
                </div>
            </form>
            {list.length > 0 && (
                <div className="grocery-container">
                    <List
                        items={list}
                        removeItem={removeItem}
                        editItem={editItem}
                    />
                    <button className="clear-btn" onClick={clearList}>
                        Clear Items
                    </button>
                </div>
            )}
        </section>
    );
}

export default App;
