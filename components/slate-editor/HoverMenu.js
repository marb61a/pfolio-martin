import React from 'react';
import ReactDOM from 'react-dom';

import { StyledMenu } from './components';
import { renderMarkButton, renderBlockButton } from './renderers';

class HoverMenu extends React.Component {
    renderMarkButton(type, icon) {
        const { editor } = this.props;
        return renderMarkButton(type, icon, editor);
    }
    
    renderBlockButton(type, icon) {
        const { editor } = this.props;
        return renderBlockButton(type, icon, editor);
    }
    

    render() {
        const { className, innerRef, editor } = this.props;
        const root = window.document.getElementById('__next');

        return ReactDOM.createPortal(
            <StyledMenu>

            </StyledMenu>
        );
    }
}

export default HoverMenu;