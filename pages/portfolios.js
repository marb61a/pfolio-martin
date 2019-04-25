import React from 'react';
import { Col, Row, Button } from 'reactstrap';

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Link } from '../routes'
import { Router } from '../routes';
import PortfolioCard from '../components/portfolios/PortfolioCard';
import { getPortfolios, deletePortfolio } from '../actions';

class Portfolios extends React.Component {
    static async getInitialProps() {
        let portfolios = [];
    
        try {
          portfolios = await getPortfolios();
        } catch(err) {
          console.error(err);
        }
    
        return {portfolios};
    }

    renderPortfolios(portfolios) {
        
    }

    render() {
        const { portfolios } = this.props;
        const { isAuthenticated } = this.props.auth;

        return (
            <BaseLayout title="I'm Martin, learn some more about me">
                <BasePage>
                    {
                        isAuthenticated &&
                        <button>
                    
                        </button>
                    }
                    <Row>

                    </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Portfolios;