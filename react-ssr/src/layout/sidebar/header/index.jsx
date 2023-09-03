import React from 'react';
import { Select } from 'antd';
import Cookies from 'js-cookie';
import styles from './index.module.less';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'LZC',
    };
  }
  componentDidMount() {
    const value = Cookies.get('renderMode')
    const { changeMoreValue } = this.props;
    if (value) {
      changeMoreValue({
        renderMode: value
      })
    }
  }
  render() {
    const { userName } = this.state;
    const { renderMode } = this.props;
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
                const { changeMoreValue } = this.props;
                changeMoreValue({
                  renderMode: v
                })
                Cookies.set('renderMode', v, { expires: 1 });//创建有效期为1天的cookie
                window.location.reload()
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
