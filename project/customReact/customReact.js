const root = document.getElementById("root");

const customElement ={
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
        children: 'Click me to visit Google'

}

function createElement(customElement, root) {
    /*
    const element = document.createElement(customElement.type);
    element.innerHTML = customElement.children;
    element.setAttribute('href', customElement.props.href);
    element.setAttribute('target', customElement.props.target);
    root.appendChild(element);
    */

    const element = document.createElement(customElement.type);
    element.innerHTML = customElement.children;
    for(const prop in customElement.props){
        if(prop === 'children') continue;
        element.setAttribute(prop, customElement.props[prop]);
    }

    root.appendChild(element);
}

createElement(customElement,root);