import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm';

import { Row, Col } from 'reactstrap';

import withAuth from '../components/hoc/withAuth';
import { Router } from '../routes';
import moment from 'moment';

class PortfolioNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: undefined
        };
        
    }

    render() {
        return(
            <BaseLayout>
                <BasePage>
                
                </BasePage>
            </BaseLayout>
        );
    }
}

export default PortfolioNew;
