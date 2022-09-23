import React from 'react';

const List = ({ people }) => {
    return (
        <React.Fragment>
            {/* <h1>List</h1> */}
            {people.map((person) => {
                const { id, fullname, age, imageURL } = person;
                return (
                    <article key={id} className='person'>
                        <img src={imageURL} alt={fullname} />
                        <div>
                            <h4>{fullname}</h4>
                            <p>{age} years</p>
                        </div>
                    </article>
                );
            })}
        </React.Fragment>
    );
};

export default List;
