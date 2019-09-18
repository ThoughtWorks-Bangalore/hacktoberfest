import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import people from '../assets/images/people.jpg'

class OtherOffices extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Other offices" />
        <header id="header">
          <h1>Other offices</h1>
          <p>Our other locations</p>
        </header>
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={people} alt="" />
            </span>
            <h2>We are conducting this event in other locations as well</h2>
            <ul>
              <li>
                <a href="https://twchennai.github.io/hacktoberfest">
                  Chennai
                </a>
              </li>
            </ul>
          </section>
        </div>
      </Layout>
    )
  }
}

export default OtherOffices
