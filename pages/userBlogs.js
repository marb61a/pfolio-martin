import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import PortButtonDropdown from '../components/ButtonDropdown';
import withAuth from '../components/hoc/withAuth';
import { Link, Router } from '../routes';

class UserBlogs extends React.Component {
    static async getInitialProps({req}) {
        let blogs = [];

    }

    renderBlogs(blogs) {
        return (
            <ul>
                
            </ul>
        );
    }

    render(){
        return (
            <BaseLayout>
                <div>
                    <div className="overlay"></div>
                    <Container>

                    </Container>
                </div>
                <BasePage>
                
                </BasePage>
            </BaseLayout>
        );
    }
}

export default UserBlogs;