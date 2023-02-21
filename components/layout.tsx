import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { BookOutlined, UserOutlined } from '@ant-design/icons';

type Props = { children: React.ReactNode }

const { Header, Sider } = Layout

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

export default function LayoutMenu({ children }: Props) {
  return <Layout>
    <Header className="site-layout">
      <span style={{ float: 'left', marginLeft: 0, marginTop: 0, fontSize: 20 }}> RPTConsultants </span>
      <Menu mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Header>
    <Layout>
      <Sider>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<UserOutlined />} >Usuarios</Menu.Item>
          <Menu.Item key="2" icon={<BookOutlined />} >Tablas de Referencia</Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '24px 24px 24px' }}>
        {children}
      </Layout>
    </Layout>

  </Layout>;
}