import React from 'react';

import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>My name is {props.name}</p>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person