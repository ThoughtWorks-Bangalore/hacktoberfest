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
  welcome: 'orange',
  intro: 'aquamarine',
  oss: 'lightblue',
  workshop: 'yellow',
  demo: 'violet',
  lunch: 'skyblue',
  hack: 'lavender',
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
            <p>
              Please don't forget to bring your own laptops{' '}
              <span aria-label="wink" role="img">
                😉
              </span>
            </p>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{
                  background: COLOURS.welcome,
                  color: '#000000',
                }}
                contentArrowStyle={{
                  borderRight: '7px solid rgb(33, 150, 243)',
                }}
                date="9 am"
                iconStyle={{ background: COLOURS.welcome, color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">Welcome</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  <p>
                    <ul>
                      <li>Greetings and formalities</li>
                      <li>Overview of programming</li>
                      <li>Code of conduct</li>
                    </ul>
                  </p>
                </h4>
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
                date="9:15 am"
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
                date="9:30 am"
                iconStyle={{ background: COLOURS.oss, color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">
                  Introduction to Open Source
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
                date="9:45 am"
                iconStyle={{ background: COLOURS.workshop, color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">Workshop</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  How to contribute to Open Source
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{
                  background: COLOURS.demo,
                  color: '#000000',
                }}
                contentArrowStyle={{
                  borderRight: '7px solid rgb(33, 150, 243)',
                }}
                date="10:00 am"
                iconStyle={{ background: COLOURS.demo, color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">Demos</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Open Source project showcase
                </h4>
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
                date="12:00 pm"
                iconStyle={{ background: COLOURS.lunch, color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">Lunch</h3>
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
                date="1:00 pm"
                iconStyle={{ background: COLOURS.hack, color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">Hack time</h3>
                <p>
                  Facilitate the formation of groups by interest and hack
                  together.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Agenda
