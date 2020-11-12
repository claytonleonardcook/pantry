import React from 'react';

import { List, ListItem, Paper, Radio, RadioGroup } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Item from './Item';
import './FilterMenu.scss';

function FilterMenu({ setFilter, toggleFilterMenu, setToggleFilterMenu }) {
    return (
        <div className="FilterMenu" style={{ display: `${toggleFilterMenu ? 'initial' : 'none'}` }}>
            <Paper elevation={5}>
                <FontAwesomeIcon icon={faTimes} onClick={() => setToggleFilterMenu(!toggleFilterMenu)} />
                <RadioGroup>
                    <List>
                        <ListItem>
                            All
                            <Radio value="" onChange={(event) => {
                                setFilter(event.currentTarget.value);
                            }} />
                        </ListItem>
                        {
                            Object.entries(new Item().tags).map(([tag], index) => {
                                return (
                                    <ListItem key={index}>
                                        {tag}
                                        <Radio value={tag} onChange={(event) => {
                                            setFilter(event.currentTarget.value);
                                        }} />
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </RadioGroup>
            </Paper>
        </div>
    );
};

export default FilterMenu;