import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>This is home</NavLink>
        <NavLink to="/create" activeClassName="is-active">create page</NavLink>
        <NavLink to="/help" activeClassName="is-active">help page</NavLink>
    </header>
)

export default Header