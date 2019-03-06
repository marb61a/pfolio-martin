import React from 'react';
import Typed from 'react-typed';

import BaseLayout from '../components/layouts/BaseLayout';
import { Button, Container, Row, Col } from 'reactstrap';

class Index extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }

  componentDidMount() {
    console.log("Component Mounted");
  }

  render() {
    return(
      <BaseLayout 
        className={`cover`}
        headerType="index"
        title='Martin Byrne - Portfolio'
      >
        <div className="main-section">
          <div className="background-image">
            <img src="/static/images/background-index.png" />
          </div>
          <Container>
            <Row>
              
            </Row>
          </Container>
        </div>
      </BaseLayout> 
    )
  }
}

export default Index;