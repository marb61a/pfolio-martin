import React from 'react';
import {
    ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

export default class PortButtonDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        }
    }

    toggle() {
        this.setState({
            dropdownOpen: this.state.dropdownOpen
        });
    }

    render() {
        const { items } = this.props;

        return(
            <ButtonDropdown>
                
            </ButtonDropdown>
        )
    }
}