export default function Responder(element, options) {
    this.element = element

    this.options = Object.assign({
        states: [],
        activeState: 0,
        target(e) { return e.parentNode },
        render(e, s) { e.setAttribute('data-state', s) }
    }, options)

    this.currentState = this.options.activeState

    this.target = (typeof this.options.target === 'function')
                ? this.options.target(this.element, this.options)
                : this.options.target
}

Responder.prototype.render = function() {
    let prevState = this.currentState
    for (let state of this.options.states) {
        this.options.render(this.element, state, prevState)
        prevState = state

        if (this.options.test(this.element, this.target, this.options)) {
            this.currentState = state
            return
        }
    }

    this.options.render(this.element, this.currentState, prevState)
}
