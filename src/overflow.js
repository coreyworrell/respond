export default (e, t) => scrollWidth(e) <= innerWidth(t)

function scrollWidth(e) {
    const r = e.getBoundingClientRect()
    return e.scrollWidth + (parseInt(r.width) - r.width)
}

function innerWidth(e) {
    const c = getComputedStyle(e)
    return e.clientWidth - parseFloat(c.paddingLeft) - parseFloat(c.paddingRight)
}
