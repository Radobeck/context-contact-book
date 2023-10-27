import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddForm from './components/AddForm';
import ContactList from './components/ContactList';
const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <div className="demo-logo" />
      <Navbar />

      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/add" element={<AddForm />} />
            <Route path="/contacts" element={<ContactList />} />
          </Routes>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default App;
