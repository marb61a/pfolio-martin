import { Button, Icon } from '../components';

const DEFAULT_NODE = 'paragraph'

function onClickMark(event, type, editor) {
    event.preventDefault()
    editor.toggleMark(type)
};

export function renderMarkButton(type, icon, editor) {
    const { value } = editor;
    const isActive = value.activeMarks.some(mark => mark.type == type)

    return (
        <Button
            reversed
            active={isActive}
            onMouseDown={event => onClickMark(event, type, editor)}
        >
            <Icon>{icon}</Icon>
        </Button>
    );
}

const hasBlock = (type, value) => {
    return value.blocks.some(node => node.type == type)
};

const onClickBlock = (event, type, editor) => {
    event.preventDefault()

    const { value } = editor
    const { document } = value

    // Handles everything except the list buttons
    if (type != 'bulleted-list' && type != 'numbered-list') {

    } else {
        
    }
}