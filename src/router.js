import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Home from './pages/home'
import WorkFlow from './pages/work-flow'

export default class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/work-flow' component={WorkFlow}/>
            <Redirect to="/home"/>
          </Switch>
        </App>
      </BrowserRouter>
    )
  }
}