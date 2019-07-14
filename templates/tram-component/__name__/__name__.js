import { registerHtml } from 'tram-one'
import './{{ name }}.scss'

const html = registerHtml()

export default (props, children) => {
  return html`
    <div class="{{ name }}">
    </div>
  `
}
