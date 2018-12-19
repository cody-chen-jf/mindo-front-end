import { Menu, Icon } from 'antd';
import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import { connect } from 'react-redux'

const handleClick = (e) => {
  console.log('click', e)
}

class NavLeft extends Component {
  render() {
    return (
      <div>
        <Menu
          onClick={handleClick}
          defaultSelectedKeys={['1']}
          mode="inline"
          inlineCollapsed={true}
          style={{height: 'calc(100vh - 60px)', width: 80}}
        >
          <Menu.Item key="home">
            <NavLink to='/home'>
              <Icon type="pie-chart" />
              <span>Home</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="work-flow">
            <NavLink to='/work-flow'>
              <Icon type="desktop" />
              <span>Create</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="help">
            <Icon type="inbox" />
            <span>Help</span>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

const mapState = (state) => ({
  history: state.history
})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(NavLeft)