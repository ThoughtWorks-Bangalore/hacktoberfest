import React from 'react'
import { Link } from 'gatsby'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'first', 'cta'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="/#">Introduction</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="first">
                    <a href="/#">More</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="cta">
                    <a href="/#">Location</a>
                </Scroll>
            </li>
            <li>
                <Link to="/agenda">
                    Agenda
                </Link>
            </li>
            <li>
                <Link to="/other-offices">
                    Other offices
                </Link>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
