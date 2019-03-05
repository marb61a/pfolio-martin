import React from 'react';

import BaseLayout from '../components/layouts/BaseLayout';

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
      <BaseLayout>
        <div className="main-section">
          <div>
            
          </div>
        </div>
      </BaseLayout> 
    )
  }
}

export default Index;