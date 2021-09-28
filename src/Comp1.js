import React from 'react';

export default class Comp1 extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {this.props.header} !!!
            </div>
        )
    }
}