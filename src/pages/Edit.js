import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import './Edit.scss';

function Edit({ params, user, list }) {
    const history = useHistory();
    let { key } = params;
    const [item, setItem] = useState(list[key]);

    const [name, setName] = useState(item?.name);
    const [tags, setTags] = useState(item?.tags);

    return (
        <div className="Edit">
            <label htmlFor="item">Item</label>
            <input id="item" type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <button onClick={() => firebase.database().ref(`${user.uid}/${key}`).set({ name, checked: false, tags })}>Update</button>
            <button onClick={() => {
                firebase.database().ref(`${user.uid}/${key}`).remove();
                history.goBack();
            }}>Delete</button>
        </div>
    );
}

export default Edit;
