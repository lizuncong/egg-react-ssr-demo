import React from 'react';
import { NavLink } from 'react-router-dom';

const menuList = [
  {
    label: '系统配置',
    key: '/system',
    children: [
      {
        label: <NavLink to='/system/user'>用户管理</NavLink>,
        key: '/system/user',
      },
    ],
  },
  {
    label: '商品管理',
    key: '/product',
    children: [
      {
        label: <NavLink to='/product/list'>商品列表</NavLink>,
        key: '/product/list',
      },
    ],
  },
];
export default menuList;
