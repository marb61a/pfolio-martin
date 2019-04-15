import React from 'react';

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';

class BlogEditorUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSaving: false
        }

        this.updateBlog = this.updateBlog.bind(this);
    }

    updateBlog(story, heading) {
        const {blog} = this.props;
        const updatedBlog = {};
        
    }

    render() {
        return(
            <BaseLayout>
            
            </BaseLayout>
        );
    }
}

export default BlogEditorUpdate;