import React, { Component } from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel';
import LoginForm from './LoginFrom';
import SignInForm from './SignInFrom';
import {isAuthed} from  '../AuthCore';
import Task from './Task';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tabValue: 0,
            isAuth: false
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event, newValue) => {
        this.setState({
            tabValue: newValue
        });
    }
    componentDidMount() {
        this.setState({
            isAuth: isAuthed()
        })
    }
    render() {
        if(!this.state.isAuth)
            return (
                <div>
                    <Tabs value={this.state.tabValue} onChange={this.handleChange}>
                        <Tab label="ورود" />
                        <Tab label="ثبت نام" />
                    </Tabs>
                    <TabPanel value={this.state.tabValue} index={0}>
                        <LoginForm />
                    </TabPanel>
                    <TabPanel value={this.state.tabValue} index={1}>
                        <SignInForm />
                    </TabPanel>
                </div>
            )
        else  
            return <Task />
    }
}

export default Home;

