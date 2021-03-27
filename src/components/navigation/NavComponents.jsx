import React from 'react'
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

export const NavComponents = () => {
  return (
    <div>
      <Navbar className="navbar-light bg-white shadow mb-5" light expand="xs">
        {/* <NavLink className="navbar-brand nav-link" to="/">
          Event Management
        </NavLink> */}

        <Nav className="navbar-brand" navbar>
          <NavItem>
            Event Management
          </NavItem>
        </Nav>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="nav-link mr-3" to="/addevent">
              + Add Event
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/dashboard">
              Dashboard
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div >
  )
}
