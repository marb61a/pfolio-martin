import React  from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Row, Col } from 'reactstrap';

class About extends React.Component {
    render(){
        return (
            <BaseLayout
                title="Martin Byrne - Learn more about me"
                {...this.props.auth}
            >
               <BasePage className='about-page'>
                    <Row className='mt-5'>
                        <Col md='6'>
                        <div className="left-side">
                            <h1 className="title fadein">Hello, Welcome</h1>
                            <h4 className="subtitle fadein">To About Page</h4>
                            <p className="subsubTitle fadein">Feel free to read short description about me.</p>
                        </div>
                        </Col>
                        <Col md='6'>
                            <div className='fadeIn'>
                                <p>Hi, My name is Martin </p>
                                <p>
                                    
                                </p>
                            </div>
                        </Col>
                    </Row>
               </BasePage>
            </BaseLayout>
        )
    }
}

export default About;