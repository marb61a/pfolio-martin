import React from 'react';

export default class SlateEditor extends React.Component {
    state = {
        value: Value.create(),
        isLoaded: false
    };

    componentDidMount() {
        const valueFromProps = this.props.initialValue;
    }

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