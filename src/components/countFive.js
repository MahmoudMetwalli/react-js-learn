import React, { Component } from 'react';

class CountFive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    increment = () => {
        for (let i = 0; i < 5; i++) {
            this.setState((prevState) => ({
                count: prevState.count + 1,
            }));
        }
    }
    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={() => this.increment()}>
                    Increase Count by 5
                </button>
            </div>
        );
    }
}

export default CountFive;