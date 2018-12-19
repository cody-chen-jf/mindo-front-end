import React, { Component } from 'react'
import './App.less'
import Header from './components/header'
import NavLeft from './components/nav-left'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div style={{display: 'inline-block', float: 'left'}}>
          <NavLeft/>
        </div>
        <div style={{
          display: 'inline-block',
          float: 'left',
          backgroundColor: '#f0f2f5',
          width: 'calc(100% - 80px)',
          height: 'calc(100vh - 60px)',
          padding: 20
        }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
