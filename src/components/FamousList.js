import React, { Component } from 'react';
import FamousRow from './FamousRow';

class FamousList extends Component {

    buildRows() {
        const famousPeopleList = [];
        for (let i = 0; i < this.props.famousList.length; i++) {
            let famousOne = this.props.famousList[i];
            let personRow = (<FamousRow key={i} famousOne={famousOne}/>)
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
                        {this.buildRows()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FamousList;