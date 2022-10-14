export default function Box(params) {
    const { element, children, className } = params;
    const box = document.createElement(element || 'div');
    box.className = className || '';

    if (Array.isArray(children))
        children.map(child => {
            box.append(child)
        })
    else
        box.innerHTML = children || '';

    return box

}