import React from 'react';
import Typed from 'react-typed';

import BaseLayout from '../components/layouts/BaseLayout';
import { Button, Container, Row, Col } from 'reactstrap';

class Index extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {};

    this.roles = [
      'Web Developer',
      'JavaScript',
      'Frontend',
      'React',
      'Open Source Enthusiast',
      'Linux',
      'Android',
      'Tech Lover'
    ]
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
              <Col md="6">
                <div className="hero-section">

                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to Martin's Portfolio Website
                    Checkout some stuff I have done and how you can contact me
                  </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={60}
                  backSpeed={60}
                  strings={this.roles}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout> 
    )
  }
}

export default Index;