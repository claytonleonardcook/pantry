import React from 'react';
import { List, ListItemText, ListItem, ListItemIcon, Checkbox } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import firebase from 'firebase/app';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import tagConfig from './tagConfig';
import './CheckList.scss';

function CheckList({ list, filter, user }) {
    const history = useHistory();
    return (
        <List className="CheckList">
            {
                Object.keys(list).filter((key) => {
                    const { tags } = list[key];
                    return filter ? tags[filter] : true;
                }).map((key, index) => {
                    const { name, checked, tags } = list[key];
                    return (
                        <ListItem key={index}>
                            <Checkbox checked={checked} onChange={() => {
                                firebase.database().ref(`${user.uid}/${key}/checked`).set(!checked);
                            }} />
                            <ListItemText style={{ textDecoration: `${checked ? 'line-through' : 'none'}` }} primary={name} secondary={
                                <span>
                                    {
                                        Object.entries(tags).map(([tag, checked], index) => {
                                            return (
                                                <FontAwesomeIcon key={index} icon={tagConfig[tag]} style={{ opacity: `${checked ? 1 : 0.4}` }} />
                                            )
                                        })
                                    }
                                </span>
                            } />
                            <ListItemIcon onClick={() => history.push(`/edit/${key}`)}>
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </ListItemIcon>
                        </ListItem>
                    )

                })
            }
        </List>
    )
};

export default CheckList;