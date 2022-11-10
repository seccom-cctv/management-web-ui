import './Input.css';
import { useState } from 'react';

const Input = (props) => {

    const [value, setValue] = useState('');

    const setValueHandler = (event) => {
        setValue(event.target.value);
        if (props.on_value_changed !== undefined) {
            props.on_value_changed(event.target.value);
        }
    }

    let id = "input-field";
    if (props.label !== undefined)
        id = id + "-" + props.label;

    return (
        <input 
        data-testid={id} 
        type={props.type}
        value={props.value}
        placeholder={props.label}
        onChange={setValueHandler}
        className="input-item"
        />
    )
}

export default Input;