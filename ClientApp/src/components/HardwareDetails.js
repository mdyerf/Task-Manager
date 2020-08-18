import React, { Component } from 'react'

class HardwareDetails extends Component {
    constructor(props) {
        super(props);

        this.state = this.props;
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.state)}
            </div>
        )
    }
}

export default HardwareDetails
