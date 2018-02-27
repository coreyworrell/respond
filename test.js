import {Respond, overflow} from './'
import test from 'tape'

test('rewrite real tests', t => {
    const r = new Respond('div', [
        {
            states: ['wide', 'mid', 'narrow'],
            test: overflow
        }
    ])

    const root = document.querySelector('div')
    document.querySelector('[data-add]').addEventListener('click', () => {
        const e = document.createElement('span')
        e.textContent = 'another'
        root.appendChild(e)
        r.render()
    })

    t.ok(r instanceof Respond, 'instanceof')

    t.end()
})
