import React, { Component } from 'react';
import FamousRow from './FamousRow';

class FamousList extends Component {

    buildRows() {
        const famousPeopleList = [];
        for (let i = 0; i < this.props.famousList.length; i++) {
            let famousOne = this.props.famousList[i];
            let personRow = (<tr>
                <td>{famousOne.person}</td>
                <td>{famousOne.role}</td>
            </tr>)
            famousPeopleList.push(personRow);
        }
        return famousPeopleList;
    }

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
                        {/* <FamousRow /> */}
                        {this.buildRows()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FamousList;