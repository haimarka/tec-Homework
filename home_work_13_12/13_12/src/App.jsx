import React from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import Details from "./pages/Details";

export default function App() {
    const arrayOfBooks = [{name: "haim", age: 29},{name: "shmuel", age: 31}];
    let detailsBook;
    const getSingleBook = (i) => {
        detailsBook  = arrayOfBooks[i];
    }
    return (
        <BrowserRouter>
            <div>
            <Link to='/'>Home</Link> <Link to='/Books'>Books</Link>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/Books' render={()=><Books getSingleBook={getSingleBook} sendArray={arrayOfBooks}/>} />
                    <Route exact path='/AddBook' render={()=><AddBook sendArray2={arrayOfBooks}/>}/>
                    <Route exact path='/Details' render={()=><Details detailsBook={detailsBook} />}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}


