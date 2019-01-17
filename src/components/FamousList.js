import React, { Component } from 'react';
import FamousRow from './FamousRow';

class FamousList extends Component {
    render() {
        return (
            <div>
                {JSON.stringify(this.props.famousList)}
                <table id="FamousTable">
                    <thead>
                        <th>Name</th>
                        <th>Role</th>
                    </thead>
                    <tbody>
                        <FamousRow />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FamousList;