import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm';

import { Row, Col } from 'reactstrap';

import withAuth from '../components/hoc/withAuth';
import { Router } from '../routes';
import moment from 'moment';

const INITIAL_VALUES = {
    title: '',
    company: '',
    location: '',
    position: '',
    description: '',
    startDate: moment(),
    endDate: moment() 
};

class PortfolioNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: undefined
        };
        
        this.savePortfolio = this.savePortfolio.bind(this);
    }

    savePortfolio(portfolioData, { setSubmitting }) {
        setSubmitting(true);

        createPortfolio(portfolioData)
            .then((portfolio) => {
                setSubmitting(false);
                this.setState({
                    error: undefined
                });
                Router.pushRoute('/portfolios');
            })
            .catch(

            );
    }

    render() {
        return(
            <BaseLayout>
                <BasePage>
                    <Row>
                        <Col md='6'>
                        
                        </Col>
                    </Row>
                </BasePage>
            </BaseLayout>
        );
    }
}

export default PortfolioNew;
