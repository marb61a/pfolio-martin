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

        try{
            blogs = await getBlogs(req)
        } catch {
            console.error(err);
        }

        return(blogs);
    }

    renderBlogs = (blogs) => (
        blogs.map((blog, index) => (
            <div key={index} className="post-preview">
                <Link>
                    <a>

                    </a>
                </Link>
            </div>
        ))
    )

    render() {
        const blogs = this.props;

        return(
            <BaseLayout
                {...this.props.auth}
                headerType={'landing'}
                className="blog-listing-page"
                title="Martin - Newest Blog Articles to Read"
            >
                <div className="masthead">
                    <div className="overlay"></div>
                    <Container>
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">

                            </div>
                        </div>
                    </Container>
                </div>
            </BaseLayout>
        );
    }
}

export default Blogs;