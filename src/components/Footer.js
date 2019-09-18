import React from 'react'
import logo from '../assets/images/tw-logo.png';

const Footer = props => (
  <footer style={{
    margin: 'auto'
  }} id="footer">
    <section>
      <h2>Links</h2>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/thoughtworks"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/thoughtworks/"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </section>
    <section>
      <h2>Sponsored by</h2>
      <img alt="Thoughtworks logo" style={{
        width: '30vw'
      }} src={logo} />
    </section>
    <p className="copyright">
      Made with <span className="fa-heart fa"></span>
    </p>
  </footer>
)

export default Footer
