import React from 'react';

export default class PortfolioCreateForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '', 
            description: '', 
            language: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const field = event.target.name;
        this.setState({
            [field]: event.target.value
        });
    }

    handleSubmit(event) {
        
    }

    render() {
        return(
            <div>

            </div>
        )
    }
}