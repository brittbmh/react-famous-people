import React, {Component} from 'react';

class FamousRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.famousOne.person}</td>
                <td>{this.props.famousOne.role}</td>
            </tr>
        );
    }
}

export default FamousRow;