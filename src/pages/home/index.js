import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import { Route } from 'react-router-dom'


import Index from '../index/index.js'
import Found from '../found'
import News from '../news'
import Mind from '../mind'

class index extends Component {
  constructor(props) {
    super(props);
    // 对路径做出判断，当路径为/home的时候，自动跳转到/home/index
    if(this.props.location.pathname === '/home'){
      this.props.history.push('/home/index')
    }
  }

  render() {
    const {pathname}   = this.props.location
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#21b97a"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={
              <i className={['iconfont','icon-ind'].join(' ')}></i>
            }
            selectedIcon={ 
              <i className={['iconfont','icon-ind'].join(' ')}></i>
            }
            selected={pathname === '/home/index'}
            onPress={() => {this.props.history.push('/home/index')}}
            data-seed="logId"
          >
             <Route component={Index} path="/home/index"></Route>
          </TabBar.Item>
          <TabBar.Item
            title="找房"
            key="found"
            icon={
              <i className={['iconfont','icon-findHouse'].join(' ')}></i>
            }
            selectedIcon={
              <i className={['iconfont','icon-findHouse'].join(' ')}></i>
            }
            selected={pathname === '/home/found'}
            onPress={() => {this.props.history.push('/home/found')}}
            data-seed="logId1"
          >
            <Route component={Found} path="/home/found"></Route>
          </TabBar.Item>
          <TabBar.Item
            title="资讯"
            key="news"
            icon={
              <i className={['iconfont','icon-infom'].join(' ')}></i>
            }
            selectedIcon={
              <i className={['iconfont','icon-infom'].join(' ')}></i>
            }
            selected={pathname === '/home/news'}
            onPress={() => {this.props.history.push('/home/news')}}
          >
            <Route component={News} path="/home/news"></Route>
          </TabBar.Item>
          <TabBar.Item
            icon={<i className={['iconfont','icon-my'].join(' ')}></i>}
            selectedIcon={<i className={['iconfont','icon-my'].join(' ')}></i>}
            title="我的"
            key="mind"
            selected={pathname === '/home/mind'}
            onPress={() => {this.props.history.push('/home/mind')}}
          >
             <Route component={Mind} path="/home/mind"></Route>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default index
