import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Detailes extends Component {
    state = { redirect: false }

    render() {
        if (this.state.redirect) { return <Redirect to='Books' /> }
        const { book } = this.props
        return (
            <div>
                <h1>Detailes page</h1>
                <h2>{book.title}</h2>
                <h2>{book.author}</h2>
                <h2>{book.age}</h2>

            </div>
        )
    }
}
