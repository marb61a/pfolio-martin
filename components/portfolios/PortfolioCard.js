import React from 'react';
import { Card, CardHeader, CardBody, CardText, CardTitle, Button } from 'reactstrap';
import PortfolioCardDetail from './PortfolioCardDetail';

export default class PortfolioCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return(
            <span>
                <PortfolioCardDetail />
                <Card className='portfolio-card'>
                    <CardHeader>

                    </CardHeader>
                    <CardBody>
                        
                    </CardBody>
                </Card>
            </span>
        );
    }
}