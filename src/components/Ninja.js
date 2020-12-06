import React from 'react';

const Ninja = ({ninja, index}) => {
    console.log(ninja);
    return (
        <li key={index}>
            <span className={ninja.available}></span>
            <span className="name">{ninja.name}</span>
            <span className="rank">{ninja.rank}</span>
        </li>
    );
}
 
export default Ninja;