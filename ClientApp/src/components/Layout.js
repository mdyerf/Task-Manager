import React, { Component } from 'react'

import './style.css';

class Layout extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="layout">
                <div className="container box">
                {this.props.children}
                </div>
                
            </div>
        )
    }
}

export default Layout
