import React, { Component } from 'react';

class Famous extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: 'Dolly Parton',
            role: '9 to 5',
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
    
    sendFamous = (event) => {
        event.preventDefault();
        console.log(`${this.state.person}`);
        
        const famousPerson = {
            person: this.state.person,
            role: this.state.role
        }
        this.props.logFamous(famousPerson);
        this.setState({
            person: '',
            role: '',
        })
        
    }

    

    render() {
        return (
            <div>
                <form onSubmit={this.sendFamous}>
                    <label>Famous Person
                        <input name="person" onChange={this.acceptPerson} value={this.state.person} type="text" placeholder="famous person" />
                    </label>
                    <label>Famous Role
                        <input name="role" onChange={this.acceptRole} value={this.state.role} id="role" type="text" placeholder="role" />

                    </label>
                    <button id="submit">Submit</button>
                </form>
                <br />
                <p>{this.state.person} is famous for "{this.state.role}"</p>
            </div>
        )
    }
}

export default Famous;