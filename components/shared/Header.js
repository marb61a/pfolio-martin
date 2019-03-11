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
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { isOpen } = this.state;
        
        return (
            <div>
                <Navbar
                    className={`port-navbar port-nav-base absolute ${className} ${menuOpenClass}`}
                    color="transparent" 
                    dark expand="md"
                >
                    <NavbarBrand className="port-navbar-brand" href="/">Martin Byrne</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <nav className="ml-auto" navbar>
                            <NavItem className="port-navbar-item">

                            </NavItem>
                        </nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;