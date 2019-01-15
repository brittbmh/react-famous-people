import React, { Component } from 'react';

class Famous extends Component {
    constructor() {
        super();
        this.state = {
            person: 'Dolly Parton',
            role: '9 to 5'
        }
    }

    acceptPerson = (event) => {
        console.log(event.target.value);
        this.setState({
            person: event.target.value
        })
    }

    acceptRole = (event) => {
        console.log(event.target.value);
        this.setState({
            role: event.target.value
        })
    }

    render () {
        return (
            <div>
                <input onChange={this.acceptPerson} type="text" placeholder="famous person" />
                <input onChange={this.acceptRole} type="text" placeholder="role" />
                <button id="submit">Submit</button>
                <br />
                <p>{this.state.person} is famous for "{this.state.role}"</p>
            </div>
        )
    }
}

export default Famous;