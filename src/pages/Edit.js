import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import '../classes/Item';
import './Edit.scss';
import Item from '../classes/Item';

function Edit({ params, user, list }) {
    const history = useHistory();
    if (!user) {
        history.push('/');
    }
    let { key } = params;

    const [item, setItem] = useState(list[key] || new Item(''));

    const [name, setName] = useState(item?.name);
    const [tags, setTags] = useState(item?.tags);

    /*
    dairy: false,
    vegetable: false,
    fruit: false,
    meat: false,
    sweet: false,
    fiber: false,
    other: false
    */

    //onClick={() => firebase.database().ref(`${user.uid}/${key}`).set({ name, checked: false, tags })}
    return (
        <div className="Edit">
            <div>
                <label htmlFor="name">
                    <span>Name</span>
                    <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
            </div>
            <ul>
                {
                    Object.entries(tags).map(([tag, checked]) => {
                        return <li key={tag}>
                            <label htmlFor={tag}>
                                <span>{`${tag[0].toUpperCase()}${tag.slice(1)}`}</span>
                                <input id={tag} type="checkbox" checked={checked} onChange={() => {
                                    let newTags = { ...tags };
                                    newTags[tag] = !checked;
                                    setTags(newTags);
                                }} />
                            </label>
                        </li>
                    })
                }
            </ul>

            <button onClick={() => {
                console.log(name, tags);
            }}>{list[key] ? 'Update' : 'Add'}</button>
            <button onClick={() => {
                firebase.database().ref(`${user.uid}/${key}`).remove();
                history.goBack();
            }}>Delete</button>
        </div>
    );
}

export default Edit;
