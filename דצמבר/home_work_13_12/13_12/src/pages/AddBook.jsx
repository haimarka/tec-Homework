import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class AddBook extends Component {
    state = {redirect: false}

    render() {
        if(this.state.redirect){return <Redirect to='/books'/>}
        return (
            <div>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    const form = e.currentTarget;
                    this.props.sendArray2.push({name:form.name.value,age:form.age.value})
                    // console.log(form.name.value,form.age.value);
                    this.setState({redirect:true})

                }}>
                    <input type="text" name='name' placeholder='name' /><br />
                    <input type="number" name='age' placeholder='age' /><br />
                    <input type="submit" value='submit' />
                </form>
            </div>
        )
    }
}
