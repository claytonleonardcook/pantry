import React from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import './List.scss';

function List({ list, setList, filters, user }) {
    const deleteItem = key => firebase.database().ref(`${user.uid}/${key}`).remove();

    return (
        <ul className="List">
            {
                Object.keys(list).filter((key) => {
                    const { checked, unchecked } = filters;
                    const item = list[key];
                    return ((checked && unchecked) || (checked && item.checked) || (unchecked && !item.checked));
                }).map((key, index) => {
                    const { name, checked } = list[key];
                    return (
                        <li key={key} style={{ textDecoration: (checked) ? 'line-through' : 'none' }}>
                            <span onClick={() => {
                                firebase.database().ref(`${user.uid}/${key}/checked`).set(!checked);
                            }}>{name}</span>
                            <button onClick={() => deleteItem(key)}>Delete</button>
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default List;