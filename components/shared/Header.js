import React from 'react';
import Link from 'next/link';
import ActiveLink from '../ActiveLink';

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
import auth0 from '../../services/auth0';

const BsNavLink = (props) => {
    const { route, title } = this.props;
    const className = props.className || "";

    return(
        <ActiveLink activeClassName="active" route={route}>
            <a className={`nav-link port-navbar-link ${className}`}> {title} </a>
        </ActiveLink>
    );
}

const Login = () => {
    return (
        <span onClick={auth0.login} className="nav-link port-navbar-link clickable"> 
            Login 
        </span>
    )
};
  
const Logout = () => {
    return (
        <span onClick={auth0.logout} className="nav-link port-navbar-link clickable"> 
            Logout 
        </span>
    )
};

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            dropdownOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    renderBlogMenu() {
        const { isSiteOwner } = this.props;

        if(isSiteOwner) {
            <Dropdown
                className="port-navbar-link port-dropdown-menu" 
                nav 
                isOpen={this.state.dropdownOpen} 
                toggle={this.toggleDropdown}
            >
                <DropdownToggle>

                </DropdownToggle>
                <DropdownMenu>
                    
                </DropdownMenu>
            </Dropdown>
        }

        return (
            <NavItem className="port-navbar-item">
                <BsNavLink route="/blogs" title="Blog" />
            </NavItem>
        );
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