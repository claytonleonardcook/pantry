import React from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import './List.scss';

function List({ list, filters, user }) {
    const deleteItem = key => firebase.database().ref(`${user.uuid}/${key}`).remove();

    return (
        <ul className="List">
            {
                Object.keys(list).filter((key) => {
                    const { checked, unchecked } = filters;
                    const item = list[key];
                    return ((checked && unchecked) || (checked && item.checked) || (unchecked && !item.checked));
                }).map((key) => {
                    const { name, checked } = list[key];
                    return (
                        <li key={key}>
                            <input type="checkbox" value={checked} checked={checked} onChange={() => {
                                firebase.database().ref(`${user.uid}/${key}/checked`).set(!checked);
                            }} />
                            {name}
                            <button onClick={() => deleteItem(key)}>Delete</button>
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default List;