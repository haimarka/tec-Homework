import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Books extends Component {
    state = { redirect: false, redirectDetails: false }

    goToDetails = (e) => {
        this.setState({ redirectDetails: true })
        this.props.sendBook(e)
    }
    
    render() {
        if (this.state.redirect) { return <Redirect to="/AddBook" /> }
        if (this.state.redirectDetails) { return <Redirect to="/Details" /> }
        const { booksArray } = this.props;

        return (
            <div>
                {booksArray.map((book, index) => {
                    return <table key={index} style={{ border: "black 1px solid" }}>
                        <tbody>
                            <tr>
                                <td style={{ border: "black 1px solid" }}>{book.title} </td>
                                <td style={{ border: "black 1px solid" }}>{book.author}</td>
                                <td><button id={index} onClick={this.goToDetails}>Details</button></td>
                            </tr>
                        </tbody>
                    </table>
                })}

                <button onClick={() => this.setState({ redirect: true })}>Add Book</button>
            </div>
        )
    }
}
