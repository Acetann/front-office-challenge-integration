import { Col, Row, Table } from 'antd'
import { medals } from '../data.json'
import { Title } from '../App'

function RankingMedals() {
  const columns = [
    {
      title: 'Pays',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Or',
      dataIndex: ['medals', 'gold'],
      sorter: {
        compare: (a: any, b: any) => a.medals.gold - b.medals.gold,
      },
    },
    {
      title: 'Argent',
      dataIndex: ['medals', 'silver'],
      sorter: {
        compare: (a: any, b: any) => a.medals.silver - b.medals.silver,
      },
    },
    {
      title: 'Bronze',
      dataIndex: ['medals', 'bronze'],
      sorter: {
        compare: (a: any, b: any) => a.medals.bronze - b.medals.bronze,
      },
      key: 'bronze',
    },
    {
      title: 'Total',
      sorter: {
        compare: (a: any, b: any) =>
          a.medals.gold +
          a.medals.silver +
          a.medals.bronze -
          (b.medals.gold + b.medals.silver + b.medals.bronze),
      },
      key: 'total',
      render: (a: any) => {
        return <p>{a.medals.gold + a.medals.silver + a.medals.bronze}</p>
      },
    },
  ]

  return (
    <Row justify="center">
      <Col span={20}>
        <h2>{Title.medals}</h2>
        <Table columns={columns} dataSource={medals} pagination={false} />
      </Col>
    </Row>
  )
}

export default RankingMedals
