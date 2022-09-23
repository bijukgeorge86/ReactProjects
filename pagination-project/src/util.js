import React from 'react';

const paginate = (followers) => {
    //console.log(followers);
    const itemsPerPage = 9;
    const page = Math.ceil(followers.length / itemsPerPage);
    //console.log(page);
    const newFollowers = Array.from({ length: page }, (_, index) => {
        const start = index * itemsPerPage;
        //console.log(start);
        return followers.slice(start, start + itemsPerPage);
    });
    //console.log(newFollowers);
    return newFollowers;
};

export default paginate;
