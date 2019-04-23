const BLOCK_TAGS = {
    blockquote: 'block-quote',
    p: 'paragraph',
    ul: 'bulleted-list',
    li: 'list-item',
    ol: 'numbered-list',
    h1: 'heading-one',
    h2: 'heading-two'
};

// Adds a dictionary of mark tags.
const MARK_TAGS = {
    em: 'italic',
    strong: 'bold',
    u: 'underlined',
    code: 'code'
};

export const rules = [
    {
        deserialize(el, next) {
            const type = BLOCK_TAGS[el.tagName.toLowerCase()]
            if(type) {
                return {
                object: 'block',
                type: type,
                nodes: next(el.childNodes),
                }
            }
        }
    }
];