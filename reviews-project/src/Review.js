import React from 'react';
import People from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { useState } from 'react';

const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = People[index];
    const checkNumber = (number) => {
        if (number > People.length - 1) {
            return 0;
        }
        if (number < 0) {
            return People.length - 1;
        }
        return number;
    };
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };
    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };
    const randomPerson = () => {
        //console.log(Math.random());
        let randomNumber = Math.floor(Math.random() * People.length);
        //console.log(randomNumber);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    };
    return (
        <article className="review">
            <h4>Reviews Component</h4>
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="random-btn" onClick={randomPerson}>
                Suprise Me
            </button>
        </article>
    );
};

export default Review;
