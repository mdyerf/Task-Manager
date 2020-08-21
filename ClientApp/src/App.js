import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Task from './components/Task';

import './components/style.css';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/task' component={Task} />
          <Route component={() => 
            <h1 className="text" style={{marginTop: '50%'}}>
            404 - یافت نشد :(
            </h1>
            }
          />
        </Switch>
      </Layout>
    );
  }
}
