import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class AddBook extends Component {
    state = { redirect: false }

    render() {
        if (this.state.redirect) { return <Redirect to="/Books" /> }
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault(); 
                    const form = e.currentTarget;
                    this.props.newBooks.push({title:form.title.value,author:form.author.value,age:form.age.value})
                    this.setState({redirect: true})
                  }}>
                    <input type="text" name="title" placeholder='enter title' /><br />
                    <input type="text" name="author" placeholder='enter author' /><br />
                    <input type="number" name="age" placeholder='enter age' /><br />
                    <input type="submit" value='submit' />
                </form>
            </div>
        )
    }
}
