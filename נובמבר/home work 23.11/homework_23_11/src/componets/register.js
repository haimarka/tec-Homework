import React from "react";

class Register extends React.Component {
    state = { name: "", last: "", email: "", password: "", confirmPassword: "", cheackbox: false }

    changeHendlerName = e => this.setState({ name: e.target.value })
    changeHendlerLastName = e => this.setState({ last: e.target.value })
    changeHendlerEmail = e => this.setState({ email: e.target.value })
    changeHendlerPassWord = e => this.setState({ password: e.target.value })
    changeHendlerConfirmPassWord = e => this.setState({ confirmPassword: e.target.value })
    changeHendlerCheckbox = (e) => this.setState({ cheackbox: this.state.cheackbox === false ? true : false })
    logForm = e => { e.preventDefault(); console.log(this.state) }
    isValideButton = () => {
        const { name, last, email, password, confirmPassword } = this.state;
        return name && last && email &&password && confirmPassword &&
        this.state.password === this.state.confirmPassword;
    }

    render() {
        const disableButton = !this.isValideButton();
        return (
            <section>
                <form onSubmit={this.logForm}>
                    <input onChange={this.changeHendlerName} type="text" placeholder="enter first name" /><br />
                    <input onChange={this.changeHendlerLastName} type="text" placeholder="enter last name" /><br />
                    <input onChange={this.changeHendlerEmail} type="text" placeholder="enter your email" /><br />
                    <input onChange={this.changeHendlerPassWord} type="password" placeholder="enter your password" /><br />
                    <input onChange={this.changeHendlerConfirmPassWord} type="password" placeholder="confirm your password" /><br />
                    <div>
                        <input onChange={this.changeHendlerCheckbox} type="checkbox" />
                        <label>Create You'r Account, its Free And Only Takes a Minute</label>
                    </div>
                    <button onClick={this.LogForm} disabled={disableButton} type="submit">Register Now</button>
                </form>
            </section>
        )
    }
}

export default Register;