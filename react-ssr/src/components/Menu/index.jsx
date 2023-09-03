import React from 'react';
import { Menu } from 'antd';

class IMenu extends React.Component {

  render() {
    const {
      selectedKeys, mode, theme, menuData, onClick,
    } = this.props;
    return (
      <Menu
        onClick={(menuItem) => onClick(menuItem)}
        selectedKeys={selectedKeys}
        mode={mode}
        theme={theme}
        items={menuData}
      >
      </Menu>
    );
  }
}

export default IMenu;
