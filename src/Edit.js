import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import firebase from 'firebase/app';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TextField, Checkbox, Button, FormControl, FormGroup, FormControlLabel, Divider, AppBar, Toolbar } from '@material-ui/core';

import tagConfig from './tagConfig';
import Item from './Item';
import './Edit.scss';

function Edit({ params, user, list }) {
    const history = useHistory();
    if (!user) {
        history.push('/');
    }
    let { key } = params;

    const [item, setItem] = useState(list[key] || new Item(''));

    const [name, setName] = useState(item?.name);
    const [tags, setTags] = useState(item?.tags);

    const signOut = () => firebase
        .auth()
        .signOut();

    return (
        <div className="Edit">
            <AppBar position="fixed">
                <Toolbar>
                    <h3>Add Item</h3>
                    <Button color="inherit" onClick={signOut}>Sign Out</Button>
                </Toolbar>
            </AppBar>
            <FormControl>
                <FormGroup>
                    <TextField variant="outlined" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <Divider />
                    {
                        Object.entries(tags).map(([tag, checked], index) => {
                            return (
                                <FormControlLabel key={index}
                                    control={<Checkbox checked={checked} onChange={() => {
                                        let newTags = { ...tags };
                                        newTags[tag] = !checked;
                                        setTags(newTags);
                                    }} />}
                                    label={<span><span>{tag}</span><FontAwesomeIcon icon={tagConfig[tag]} style={{ opacity: `${checked ? 1 : 0.4}` }} /></span>}
                                />
                            )
                        })
                    }
                    <Divider />
                    <div>
                        <Button disabled={!name} variant="contained" color="primary" type="submit" onClick={() => {
                            if (list[key]) {
                                console.log('Update')
                                firebase.database().ref(`${user.uid}/${key}`).set({ name, checked: false, tags });
                            } else {
                                console.log('Add')
                                firebase.database().ref(`${user.uid}/`).push({ name, checked: false, tags });
                            }
                            history.goBack();
                        }}>{list[key] ? 'Update' : 'Add'}</Button>
                        <br />
                        <Button disabled={!item.name} variant="contained" color="primary" type="submit" onClick={() => {
                            firebase.database().ref(`${user.uid}/${key}`).remove();
                            history.goBack();
                        }}>Delete</Button>
                        <br />
                        <Button variant="contained" color="primary" type="submit" onClick={() => {
                            history.goBack();
                        }}>Cancel</Button>
                    </div>
                </FormGroup>
            </FormControl>
        </div>
    );
}

export default Edit;
