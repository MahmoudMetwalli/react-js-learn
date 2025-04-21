import React, { Component } from 'react';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registry: 'Please Subscribe',
        };
    }
    render() {
        return (
            <div>
                <h1>Welcome to {this.props.place}.</h1>
                <h2>Registry: {this.state.registry}</h2>
                <button onClick={() => this.setState({ registry: 'Subscribed' })}>
                    Subscribe
                </button>
            </div>
        );
    }
}

export default Welcome;