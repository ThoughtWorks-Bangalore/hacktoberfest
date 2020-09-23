import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Scroll from '../components/Scroll'
import banner from '../assets/images/banner.png'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Hacktoberfest - ThoughtWorks Bangalore '19" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <span className="image main">
              <img src={banner} alt="" />
            </span>
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Introduction</h2>
                </header>
                <p>
                  <a href="https://hacktoberfest.digitalocean.com/">
                    Hacktoberfest
                  </a>{' '}
                  is an open event for people to come and contribute to Open
                  Source.
                </p>
                <p>
                  It is a month-long celebration of open source software run by{' '}
                  <a href="https://www.digitalocean.com/">DigitalOcean</a> and{' '}
                  <a href="https://dev.to/">Dev</a> which happens in the month
                  of October every year. ThoughtWorks Bangalore is hosting the
                  event to promote and support contributing to Open Source! The
                  event is organized by a passionate group of ThoughtWorkers and
                  is sponsored by{' '}
                  <a href="https://www.thoughtworks.com/">ThoughtWorks</a>.
                </p>
                <p>
                  For starters, head over to the{' '}
                  <Link to="/register">registration</Link> page to register
                  yourself for the event. You might also wanna check out{' '}
                  <Link to="/agenda">what we have in store</Link>.
                </p>
              </div>
              <span className="icon major style1 fa-heart"></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>More</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style6 fa-code"></span>
                <h3>
                  <Link to="/agenda" className="button">
                    Agenda
                  </Link>
                </h3>
              </li>
              <li>
                <span className="icon major style3 fa-calendar"></span>
                <Scroll type="id" element="cta">
                  <h3 className="button">Block your time!</h3>
                </Scroll>
              </li>
              <li>
                <span className="icon major style2 fa-balance-scale"></span>
                <h3>
                  <a href="https://do.co/hacktoberconduct" className="button">
                    Code of conduct
                  </a>
                </h3>
              </li>
              <li>
                <span className="icon major style4 fa-user-plus"></span>
                <h3>
                  <Link to="/register" className="button">
                    Register
                  </Link>
                </h3>
              </li>
            </ul>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Date & Time</h2>
              <p>10th October, 2020<br/>10 am to 5 pm</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Scroll type="id" element="intro">
                    <h3 className="button special">Back to top</h3>
                  </Scroll>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
