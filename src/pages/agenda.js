import React from 'react'
import Helmet from 'react-helmet'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import Layout from '../components/layout'
import { LINKS, PageNav } from '../components/PageNav'
import 'react-vertical-timeline-component/style.min.css'
import bike from '../assets/images/bike.jpg'

const COLOURS = {
  greet: '#ebdef0',
  intro: 'aquamarine',
  oss: 'lightblue',
  workshop: 'yellow',
  break: 'lightgreen',
  find: 'orange',
  lunch: 'skyblue',
  hack: 'lavender',
  wrap: 'violet',
}

class Agenda extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Agenda" />
        <header id="header">
          <h1>Agenda</h1>
          <p>Here's what we're planning</p>
        </header>
        <PageNav doNotShow={LINKS.agenda} />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={bike} alt="" />
            </span>
            <p>
              Total duration of the event would be from <strong>9 am</strong> to{' '}
              <strong>5 pm</strong>.
            </p>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{
                  background: COLOURS.greet,
                  color: '#000000',
                }}
                contentArrowStyle={{
                  borderRight: '7px solid rgb(33, 150, 243)',
                }}
                date="10:00 am"
                iconStyle={{ background: COLOURS.greet, color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">
                  Greetings
                </h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{
                  background: COLOURS.intro,
                  color: '#000000',
                }}
                contentArrowStyle={{
                  borderRight: '7px solid rgb(33, 150, 243)',
                }}
                date="10:05 am"
                iconStyle={{ background: COLOURS.intro, color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">
                  Introduction to Hacktoberfest
                </h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{
                  background: COLOURS.oss,
                  color: '#000000',
                }}
                contentArrowStyle={{
                  borderRight: '7px solid rgb(33, 150, 243)',
                }}
                date="10:15 am"
                iconStyle={{ background: COLOURS.oss, color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">
                  Talk on Open Source
                </h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{
                  background: COLOURS.workshop,
                  color: '#000000',
                }}
                contentArrowStyle={{
                  borderRight: '7px solid rgb(33, 150, 243)',
                }}
                date="10:45 am"
                iconStyle={{ background: COLOURS.workshop, color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">
                  Demo on contributing to Open Source
                </h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{
                  background: COLOURS.find,
                  color: '#000000',
                }}
                contentArrowStyle={{
                  borderRight: '7px solid rgb(33, 150, 243)',
                }}
                date="11:15 am"
                iconStyle={{ background: COLOURS.find, color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">
                  Find your place to contribute
                </h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{
                  background: COLOURS.lunch,
                  color: '#000000',
                }}
                contentArrowStyle={{
                  borderRight: '7px solid rgb(33, 150, 243)',
                }}
                date="01:00 pm"
                iconStyle={{ background: COLOURS.lunch, color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">
                  Lunch break
                </h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{
                  background: COLOURS.hack,
                  color: '#000000',
                }}
                contentArrowStyle={{
                  borderRight: '7px solid rgb(33, 150, 243)',
                }}
                date="2:00 pm"
                iconStyle={{ background: COLOURS.hack, color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">Hack time</h3>
                <p>
                  Facilitate the formation of groups by interest and hack
                  together.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{
                  background: COLOURS.wrap,
                  color: '#000000',
                }}
                contentArrowStyle={{
                  borderRight: '7px solid rgb(33, 150, 243)',
                }}
                date="4:30 pm"
                iconStyle={{ background: COLOURS.wrap, color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">Wrap up</h3>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Agenda
