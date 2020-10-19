import React from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import 'firebase/database';
import './List.scss';

function List({ list, setList, filters, user }) {
    const history = useHistory();
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
                        <li key={key}>
                            <span style={{ textDecoration: (checked) ? 'line-through' : 'none' }} onClick={() => {
                                firebase.database().ref(`${user.uid}/${key}/checked`).set(!checked);
                            }}>{name}</span>
                            <FontAwesomeIcon onClick={() => history.push(`/edit/${key}`)} icon={faEllipsisV} />
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default List;