import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { UserName } from './styles'

class Home extends Component {
  render() {
    return (
      <div>Welcome to home page: <UserName>{this.props.homeData.name}</UserName></div>
    )
  }

  componentDidMount() {
    this.props.changeHomeData()
  }
}

const mapState = (state) => ({
  homeData: state.getIn(['home', 'homeData']).toJS()
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  }
})

export default connect(mapState, mapDispatch)(Home)