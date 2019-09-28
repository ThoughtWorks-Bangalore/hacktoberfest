import React from 'react'
import Helmet from 'react-helmet'

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
        <div id="main">
          <section id="content" className="main">
          <span className="image main">
              <img src={boat} alt="" />
            </span>
            <span className="image main"></span>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
              <iframe
                title="Registration form"
                src="https://docs.google.com/forms/d/e/1FAIpQLScC1q3nUF6SGfDgO5OUz0j5LkLFup9WBHUg89290QIvJnsoNA/viewform?embedded=true"
                width="640"
                height="1664"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
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
