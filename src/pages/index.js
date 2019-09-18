import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import people from '../assets/images/people.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Scroll from '../components/Scroll'

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
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Introduction</h2>
                </header>
                <p>
                  An open event for people to come and contribute to Open Source
                  as part of Hacktoberfest.
                </p>
                <p>
                  Hacktoberfest is a month-long celebration of open source
                  software run by DigitalOcean and Dev. It happens in the month
                  of October every year. ThoughtWorks Bangalore is hosting the
                  event to promote and support contributing to Open Source! The
                  event is organized by a passionate group of open sorcerers and
                  sponsored by ThoughtWorks.
                </p>
              </div>
              <span className="image">
                <img src={people} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>More</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>
                  <Link to="agenda" className="button">
                    Agenda
                  </Link>
                </h3>
              </li>
              <li>
                <span className="icon major style3 fa-compass"></span>
                <Scroll type="id" element="cta">
                  <h3 className="button">Find us!</h3>
                </Scroll>
              </li>
              <li>
                <span className="icon major style5 fa-building"></span>
                <h3>
                  <Link to="other-offices" className="button purple">
                    Our other offices
                  </Link>
                </h3>
              </li>
            </ul>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Location</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6714318530103!2d77.6266601150151!3d12.928826890884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1685184eb601%3A0xc902779873f99e8f!2sThoughtWorks%20Koramangala!5e0!3m2!1sen!2sin!4v1568744019247!5m2!1sen!2sin"
                width="700"
                height="300"
                frameborder="0"
                allowfullscreen=""
              ></iframe>
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
