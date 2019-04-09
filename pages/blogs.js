import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Container, Row, Col } from 'reactstrap';
import { Link } from '../routes';

import { getBlogs } from '../actions';
import { shortenText } from '../helpers/utils';

import moment from 'moment';

class Blogs extends React.Component {
    static async getInitialProps({req}) {
        let blogs = [];
        return(blogs);
    }

    render() {
        return(
            <BaseLayout>
            
            </BaseLayout>
        );
    }
}

export default Blogs;