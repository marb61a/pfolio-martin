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
        <Button>

        </Button>
    );
}