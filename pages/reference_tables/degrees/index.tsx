import LayoutMenu from '@/components/layout'
import { Button, Col, Row, Space, Table } from 'antd'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faEdit } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useQuery } from 'react-query';
import axios from 'axios';

const { Column } = Table

export default function DegreesTable() {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () => axios.get("reference_tables/degrees/").then((res) => res.data))
  return (
    <LayoutMenu>
      <Head>
        <title>Grados</title>
      </Head>
      <Space
        className='site-layout-background'
        direction='vertical'
        style={{ width: '100%' }}
      >
        <Row gutter={[16, 16]}>
          <Col>
            <Button type='primary'>
              <Link href="/reference_tables/degrees/new"><FontAwesomeIcon icon={faPlusCircle} style={{ color: 'white', marginRight: '0.75rem' }} />
                Grado
              </Link>
            </Button>
          </Col>
        </Row>

        <Table
          bordered
          rowKey='id'
          dataSource={data}
          pagination={false}
          loading={isLoading}
        >
          <Column title='Numero' dataIndex='number' key='number' />
          <Column title='Minimo' dataIndex='minimum' key='minimum' />
          <Column title='Medio' dataIndex='medium' key='medium' />
          <Column title='Maximo' dataIndex='maximum' key='maximum' />
          <Column title='Grados HAY' dataIndex='hay_degrees' key='hay' />
          <Column title='Grados GGS' dataIndex='ggs_degrees' key='ggs' />
          <Column
            title='Actions'
            key='actions'
            render={(text, record: {id: number}) => (
              <Space size='small'>
                <Button type='link' aria-label={'edit-degree-' + record.id}>
                  <Link href="/reference_tables/degrees/new">
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                </Button>
              </Space>
            )}
          />
        </Table>

      </Space>
    </LayoutMenu>
  )
}