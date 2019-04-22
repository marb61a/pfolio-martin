import React from 'react';
import Typed from 'react-typed';

import BaseLayout from '../components/layouts/BaseLayout';
import { Button, Container, Row, Col } from 'reactstrap';

class Index extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isFlipping: false
    };

    this.roles = [
      'Web Developer',
      'JavaScript',
      'Frontend',
      'React',
      'Open Source Enthusiast',
      'Linux',
      'Android',
      'Tech Lover'
    ];
  };

  componentDidMount() {
    this.animateCard();
  }

  componentWillUnmount() {
    this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
  }

  animateCard(){
    this.cardAnimationInterval = setInterval(() => {
      this.setState({
        isFlipping: !this.state.isFlipping
      });
    }, 60000);
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
                  <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                    <div className="front">
                      <div className="hero-section-content"> 
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img alt="Guy programming welcome picture" className="image" src="/static/images/section-1.jpg"/>
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
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