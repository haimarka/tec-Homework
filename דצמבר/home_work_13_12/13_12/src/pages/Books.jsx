import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Books extends Component {
    state = { redirect: false, redirectDetailes: false }

    render() {
        if (this.state.redirect) { return <Redirect to='AddBook' /> }
        if (this.state.redirectDetailes) { return <Redirect to='Details' /> }
        return (
            <div>
                {this.props.sendArray.map((book,i)=>{
                    return(
                        <table style={{border: "solid 1px black"}} key={i}>
                            <tbody>
                                <tr>
                                    <td style={{border: "solid 1px black"}}>{book.name}</td>
                                    <td style={{border: "solid 1px black"}}>{book.age}</td>
                                    <td><button id={i} onClick={()=>{
                                        console.log(i);
                                        this.props.getSingleBook(i)
                                        this.setState({redirectDetailes:true})}}>detailes</button></td>
                                </tr>
                            </tbody>
                        </table>
                    )
                })}
                <button onClick={()=> this.setState({redirect:true})}>Add book</button>
            </div>
        )
    }
}
