import { Layout } from 'antd';
import React from 'react';
import TopBa1r from './TopBar';
import { CustomFooter as Footer } from './Footer';
const { Header, Content } = Layout;

export default function BasicLayout({ children }) {
  return (
    <React.Fragment>
      <Layout
        style={{ display: 'flex', maxHeight: '100vh', flexDirection: 'column' }}
      >
        <Header style={{ padding: 0, minHeight: 64, height: 'unset' }}>
          <TopBa1r />
        </Header>
        <Content style={{ flex: 1 }}>{children}</Content>
        <Footer />
      </Layout>
    </React.Fragment>
  );
}
