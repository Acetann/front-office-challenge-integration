import moment from 'moment'
import React, { useEffect, useState } from 'react'
import {
  Card,
  Carousel,
  Col,
  Divider,
  Empty,
  Row,
  Select
  } from 'antd'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import { nextEvent } from '../data.json'
import { Title } from '../App'

const { Meta } = Card

type ArrowProps = {
  className?: string
  onClick?: () => void
}

interface eventType {
  id: string
  sportId: string
  sportTitle: string
  pictureUrl: string
  date: string
}

const ArrowStyle = {
  fontSize: 30,
  color: 'grey',
}

const Span = 20

const RightArrow = ({ className, onClick }: ArrowProps) => (
  <RightCircleOutlined className={className} style={ArrowStyle} onClick={onClick} />
)

const LeftArrow = ({ className, onClick }: ArrowProps) => (
  <LeftCircleOutlined className={className} style={ArrowStyle} onClick={onClick} />
)

const CarouselSlide = () => {
  const [Event, setEvent] = useState<Array<Array<eventType>>>([])
  const [filterValues, setFilterValues] = useState<Array<String>>(
    nextEvent.map((event) => event.sportId)
  )

  const onFilterChange = (value: String[]) => {
    setFilterValues(value)
  }

  useEffect(() => {
    const events: Array<Array<eventType>> = []
    let eventSport: Array<eventType> = []
    nextEvent
      .filter((event) => filterValues.includes(event.id))
      .map((event) => {
        if (eventSport.length % 3 === 0 && eventSport.length !== 0) {
          events.push([...eventSport])
          eventSport = []
        }
        return eventSport.push(event)
      })
    events.push([...eventSport])
    setEvent([...events])
  }, [filterValues])

  return (
    <>
      <Row justify="center">
        <Col span={Span}>
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder={Title.chooseEvent}
            onChange={onFilterChange}
            defaultValue={nextEvent.map((event) => event.sportId)}
            options={nextEvent.map((event) => ({
              id: event.id,
              value: event.sportId,
              label: event.sportTitle,
            }))}
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={Span}>
          <h2>{Title.event}</h2>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={Span}>
          <Carousel
            style={{ paddingLeft: 64 }}
            arrows={true}
            prevArrow={<LeftArrow />}
            nextArrow={<RightArrow />}
            dots={false}
          >
            {Event[0] && Event[0].length > 0 ? (
              Event.map((eventsGroup) => {
                return (
                  <>
                    <Row>
                      {eventsGroup.map((event, index) => {
                        return (
                          <Col key={index} flex="1">
                            <Card
                              style={{ width: 300 }}
                              cover={
                                <img
                                  style={{ width: 300, height: 200 }}
                                  alt={event.sportTitle}
                                  src={event.pictureUrl}
                                />
                              }
                            >
                              <Meta
                                title={event.sportTitle}
                                description={moment(parseInt(event.date + '000')).format(
                                  'DD/MM/YYYY - HH:mm'
                                )}
                              />
                            </Card>
                          </Col>
                        )
                      })}
                    </Row>
                  </>
                )
              })
            ) : (
              <Empty description={Title.empty} />
            )}
          </Carousel>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={Span}>
          <Divider />
        </Col>
      </Row>
    </>
  )
}

export default CarouselSlide
