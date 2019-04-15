import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import withAuth from '../components/hoc/withAuth';
import { Router } from '../routes';

class BlogEditor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isSaving: false
        };

    }

    saveBlog(story, heading) {
        
    }

    render(){
        const { isSaving } = this.state;

        return (
            <BaseLayout>
            
            </BaseLayout>
        );
    }
}

export default BlogEditor;