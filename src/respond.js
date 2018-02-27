import throttle from 'lodash.throttle'
import Responder from './responder'

export default function Respond(selector, responders) {
    this.elements = getElements(selector)
    this.responders = new Map

    this.elements.forEach(e => {
        this.responders.set(e, responders.map(r => new Responder(e, r)))
    })

    window.addEventListener('load', this.render.bind(this))
    window.addEventListener('resize', throttle(this.render.bind(this), 100))
    this.render()
}

Respond.prototype.render = function() {
    this.elements.forEach(e => {
        this.responders.get(e).forEach(r => {
            r.render()
        })
    })
}

function getElements(elements) {
    if (Array.isArray(elements) || elements instanceof NodeList) {
        return elements
    } else if (elements instanceof HTMLCollection) {
        return Array.from(elements)
    } else if (elements instanceof HTMLElement) {
        return [elements]
    } else {
        return document.querySelectorAll(elements)
    }
}
