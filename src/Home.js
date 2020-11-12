import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import FilterMenu from './FilterMenu';
import CheckList from './CheckList';

import firebase from 'firebase/app';

import { AppBar, Button, Toolbar, Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import './Home.scss';

function Home({ list, user }) {
  const [filter, setFilter] = useState("")
  const [toggleFilterMenu, setToggleFilterMenu] = useState(false);

  const history = useHistory();
  if (!user) {
    history.push('/');
  }

  const signOut = () => firebase
    .auth()
    .signOut();

  return (
    <div className="Home">
      <AppBar position="fixed">
        <Toolbar>
          <Button startIcon={<FontAwesomeIcon icon={faFilter} />} onClick={() => setToggleFilterMenu(!toggleFilterMenu)}>filter</Button>
          <Button color="inherit" onClick={signOut}>Sign Out</Button>
        </Toolbar>
      </AppBar>

      <CheckList list={list} filter={filter} user={user} />

      <Fab color="primary" aria-label="add" onClick={() => history.push('/edit/0')}>
        <Add />
      </Fab>

      <FilterMenu filter={filter} setFilter={setFilter} toggleFilterMenu={toggleFilterMenu} setToggleFilterMenu={setToggleFilterMenu} />
    </div>
  );
}

export default Home;