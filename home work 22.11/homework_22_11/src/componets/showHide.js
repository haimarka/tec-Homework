import React from "react";

class ShowHide extends React.Component {
    state ={visibility: "visible"}
    hideText = () => {this.setState({
        visibility: this.state.visibility == "visible"?"hidden":"visible"
    })}
    render(props) {
        let styleText = {visibility: this.state.visibility}
        return (
            <section>
                <button onClick={this.hideText}>click</button>
                <p style={styleText}>{this.props.text}</p>
            </section>
        )
    }
}

export default ShowHide;