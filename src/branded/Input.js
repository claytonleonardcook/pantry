import React from 'react';
import './Input.scss';

function Input(props) {
    return (
        <input className="Input" value={props.value} onChange={props.onChange}/>
    );
}

export default Input;