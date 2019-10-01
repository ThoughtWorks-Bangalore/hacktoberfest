import React from 'react'
import { Link } from 'gatsby'

const createLink = (route, label) => <Link to={route}>{label}</Link>

const pages = {
  home: createLink('/', 'Home'),
  register: createLink('/register', 'Register'),
  otherOffices: createLink('/other-offices', 'Other offices'),
  agenda: createLink('/agenda', 'Agenda'),
}

export const LINKS = Object.keys(pages).reduce(
  (acc, page) => Object.assign({}, acc, { [page]: page }),
  {}
)

export const PageNav = ({ doNotShow }) => (
  <nav id="nav">
    <ul>
      <li>
        {Object.keys(LINKS)
          .filter(link => link !== doNotShow)
          .map(link => pages[link])}
      </li>
    </ul>
  </nav>
)
