# Pantry
[Pantry](https://claytoncook.github.io/Pantry/build/) is a mobile-ready, [React](https://reactjs.org/) grocery list creator, editor, and viewer.

# Overview
  - Create account via email and password or login
  - Add items via the top add item input
  - Toggle and delete items on your list
  - Filter and sort items via the top selectors
  - Keep track of your grocery trip!

# App Structure
```html
<div className="App">
    <Router>
        <Switch>
            <Route exact path="/">
                <Login user={user} />
            </Route>
            <Route exact path="/home">
                <Home list={list} setList={setList} user={user} />
            </Route>
        </Switch>
    </Router>
</div>
```

# Firebase
[Firebase](https://firebase.google.com/) is used in this project for user authentication and database storage.
#### User Structure
```js
"useruuid" : {
    "itemkey12345" : {
        "checked" : true,
        "name" : "Apples"
    },
    "itemkey67890" : {
        "checked" : false,
        "name" : "Chicken"
    }
}
```
