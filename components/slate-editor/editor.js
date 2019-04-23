import React from 'react';

import { rules } from './rules';

export default class SlateEditor extends React.Component {
    state = {
        value: Value.create(),
        isLoaded: false
    };

    componentDidMount() {
        const valueFromProps = this.props.initialValue;

    }

    componentDidUpdate() {
        this.updateMenu();
    }

    // Update app state with the new editor value
    onChange = ({ value }) => {
        this.setState({ value })
    };

    updateMenu = () => {

    };

    render() {
        const { isLoaded } = this.state;

        return(
            <React.Fragment>

            </React.Fragment>
        );
    }

    renderEditor = (props, editor, next) => {
        return(
            <React.Fragment>

            </React.Fragment>
        );
    }
} 