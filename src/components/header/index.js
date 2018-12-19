import React, { PureComponent } from 'react'
import { HeaderWrapper } from './styles'
import { Icon } from 'antd'
import { PROJECT_NAME } from '@/common/constant'

class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <Icon type="pie-chart" style={{marginRight: 20, marginLeft: 15}}/>
        {PROJECT_NAME}
      </HeaderWrapper>
    )
  }
}

export default Header