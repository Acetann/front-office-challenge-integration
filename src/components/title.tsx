import { Col } from 'antd'
import { Title } from '../App'

function FirstTitle() {
  return (
    <>
      <Col flex="auto" className="header">
        <h1>{Title.title}</h1>
      </Col>
    </>
  )
}

export default FirstTitle
