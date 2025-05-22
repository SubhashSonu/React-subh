function customRender(reactElement, mainContainer){
   /* const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    mainContainer.appendChild(domElement) */
    
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domElement);


}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

// const reactElement = {
//     type: 'button',
//     props: {
//         id:'myButton',
//         class: 'btn'
//     },
//     children: 'Click me!'
// }
// const reactElement = {
//     type: 'button',
//     props: {
//         onclick: "window.location.href='https://google.com'",
//         style: "padding: 10px 20px; background: green; color: white; border: none; border-radius: 5px;"
//     },
//     children: 'Go to Google'
// }


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
