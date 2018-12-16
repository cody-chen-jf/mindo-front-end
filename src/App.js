import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.less'
import Header from './components/header'
import NavLeft from './components/nav-left'
import Home from './pages/home'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header/>
        <BrowserRouter>
          <div>
            <div style={{display: 'inline-block', float: 'left'}}>
              <NavLeft/>
            </div>
            <div style={{display: 'inline-block', float: 'left'}}>
              <Home/>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
