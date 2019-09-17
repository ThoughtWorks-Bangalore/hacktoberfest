import React from 'react'

import logo from '../assets/images/logo.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Hacktoberfest '19</h1>
        <p>The 1<sup>st</sup> chapter</p>
        <p>ThoughtWorks, Bangalore</p>
    </header>
)

export default Header
