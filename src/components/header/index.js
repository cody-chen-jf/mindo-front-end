import React, { PureComponent } from 'react'
import { HeaderWrapper } from './styles'
import { Icon } from 'antd'

class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <Icon type="pie-chart" style={{marginRight: 20, marginLeft: 15}}/>
        Mindo
      </HeaderWrapper>
    )
  }
}

export default Header