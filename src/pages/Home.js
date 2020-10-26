import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import { useState } from 'react';
import './Home.scss';

import List from '../components/List';

function Home({ list, setList, user }) {
  const history = useHistory();
  if (!user) {
    history.push('/');
  }
  const [filters, setFilters] = useState({
    checked: true,
    unchecked: true
  });

  const signOut = () => firebase
    .auth()
    .signOut();

  return (
    <div className="Home">
      <div>
        <button onClick={signOut}>Sign Out</button>
        <div>
          <form>
            <div>
              <input id="all" type="radio" name="filters" value={(filters.checked && filters.unchecked)} defaultChecked onChange={e => setFilters({
                checked: true,
                unchecked: true
              })} />
              <label htmlFor="all">All</label>
            </div>
            <div>
              <input id="checked" type="radio" name="filters" value={filters.checked} onChange={e => setFilters({
                checked: true,
                unchecked: false
              })} />
              <label htmlFor="checked">Checked</label>
            </div>
            <div>
              <input id="unchecked" type="radio" name="filters" value={filters.unchecked} onChange={e => setFilters({
                checked: false,
                unchecked: true
              })} />
              <label htmlFor="unchecked">Unchecked</label>
            </div>
          </form>
        </div>
      </div>
      <List list={list} setList={setList} filters={filters} user={user} />
      <button onClick={() => history.push('/edit/0')}>
        <FontAwesomeIcon icon={faPlus}/>
      </button>
    </div>
  );
}

export default Home;