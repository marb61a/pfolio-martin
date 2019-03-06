import React from 'react';
import Link from 'next/link';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu
} from 'reactstrap';

class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar
                    className={"port-navbar port-nav-base absolute"}
                    color="transparent" 
                    dark expand="md"
                >
                    <NavbarBrand className="port-navbar-brand" href="/">Martin Byrne</NavbarBrand>
                    
                </Navbar>
            </div>
        )
    }
}

export default Header;