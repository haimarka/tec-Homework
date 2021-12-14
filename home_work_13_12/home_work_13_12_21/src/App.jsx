import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import AddBook from './pages/AddBook';
import Detailes from './pages/Detailes';

export default class App extends Component {

  booksArray = [{ title: "hello", author: "haim", age: 29 }, { title: "there", author: "gal", age: 20 }];
  detailsBook;

  getBook = (e) => {
    // console.log(e.target.innerText);
    this.detailsBook = this.booksArray[Number(e.target.id)]
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/">home</Link> <Link to="/Books">Books</Link>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Books' render={() => <Books booksArray={this.booksArray} sendBook={this.getBook} />} />
            <Route exact path='/AddBook' render={() => <AddBook newBooks={this.booksArray}/>} />
            <Route exact path='/Details' render={() => <Detailes book={this.detailsBook} />} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
