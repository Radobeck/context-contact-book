import { Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="home">
          <Link to={'/'}>Home</Link>
        </Menu.Item>
        <Menu.Item key="counter">
          <Link to={'/counter'}>Counter</Link>
        </Menu.Item>
        <Menu.Item key="add-contact">
          <Link to={'/add'}>Add Contact</Link>
        </Menu.Item>
        <Menu.Item key="contacts">
          <Link to={'/contacts'}>Contacts</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
