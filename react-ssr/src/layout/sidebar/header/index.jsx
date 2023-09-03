import React from 'react';
import { Select } from 'antd';
import Cookies from 'js-cookie';
import styles from './index.module.less';

class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log('renderMode====', Cookies.get('renderMode'))
    this.state = {
      userName: 'LZC',
      renderMode: 'server'
    };
  }
  componentDidMount() {
    const value = Cookies.get('renderMode')
    this.setState({
      renderMode: value
    })
  }
  render() {
    const { userName, renderMode } = this.state;
    return (
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.breadcrumb}>页面1</div>
        </div>
        <div className={styles.right}>
          <div>
            切换当前渲染模式：
            <Select
              className={styles.select}
              value={renderMode}
              style={{ width: 140, margin: '12px' }}
              onChange={(v) => {
                this.setState({
                  renderMode: v,
                })
                Cookies.set('renderMode', v)
              }}
              options={[
                { value: 'client', label: '客户端渲染模式' },
                { value: 'server', label: '服务端渲染模式' },
              ]}
            />
          </div>
          <span>
            欢迎
            {userName}
          </span>
          <span>退出</span>
        </div>
      </div>
    );
  }
}

export default Header;
