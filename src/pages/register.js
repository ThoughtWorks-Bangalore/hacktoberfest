import React from 'react'
import Helmet from 'react-helmet'
import { LINKS, PageNav } from '../components/PageNav'

import boat from '../assets/images/boat.jpg'

import Layout from '../components/layout'

class Register extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Register" />
        <header id="header">
          <h1>Register for Hacktoberfest</h1>
        </header>
        <PageNav doNotShow={LINKS.register} />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={boat} alt="" />
            </span>
            <span className="image main"></span>
            <p>
              Please read our{' '}
              <a href="https://do.co/hacktoberconduct">
                Events Code of Conduct
              </a>{' '}
              before attending. Happy Hacking!
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <iframe
                title="Registration form"
                src="https://docs.google.com/forms/d/e/1FAIpQLScC1q3nUF6SGfDgO5OUz0j5LkLFup9WBHUg89290QIvJnsoNA/viewform?embedded=true"
                width="640"
                height="1664"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Loading…
              </iframe>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Register
