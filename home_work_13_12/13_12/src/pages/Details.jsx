import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Details extends Component {
    state = {redirect: false}

    render() {
        if(this.state.redirect){return <Redirect to='/Books'/>}
        return (
            <div>
                details
                   <div>
                        <h1>{this.props.detailsBook.name}</h1>
                        <h1>{this.props.detailsBook.age}</h1>
                   </div>
            </div>
        )
    }
}
