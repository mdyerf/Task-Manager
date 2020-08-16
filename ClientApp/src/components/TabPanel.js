import React from 'react';

export default class TabPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
            {this.props.value === this.props.index 
                && this.props.children}
            </>
        )
    }
}