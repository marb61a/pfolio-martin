import React from 'react';
import { Row, Col } from 'reactstrap';

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm';
import { updatePortfolio, getPortfolioById } from '../actions';
import withAuth from '../components/hoc/withAuth';
import { Router } from '../routes';

class PortfolioEdit extends React.Component {
    static async getInitialProps({query}) {
        let portfolio = {};

        try{
            portfolio =  await getPortfolioById(query.id);
        } catch(err) {
            console.error(err);
        }

        return portfolio;
    }

    constructor(){
        super();
        this.state = {
            error: undefined
        };

    }

    render() {
        const { error } = this.state;
        const { portfolio } = this.props;

        return(
            <BaseLayout>
                <BasePage>
                    <Row>

                    </Row>
                </BasePage>
            </BaseLayout>
        );
    }
}

export default PortfolioEdit;