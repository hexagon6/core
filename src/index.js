/**
 * An object containing <code>breakpoints</code>
 * @typedef {Object} theme
 * @property {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>)} breakpoints - An object or array of CSS <code>min-width</code> values or numbers
 */

/**
 * An object containing {@link theme}
 * @typedef {Object} props
 * @property {theme} theme - An object containing a <code>breakpoints</code> object or array
 */

/**
 * Utility Functions
 * @namespace util
 */

export { default as fontSize } from './lib/fontSize'
export { default as margin } from './lib/margin/margin'
export { default as marginTop } from './lib/margin/marginTop'
export { default as marginLeft } from './lib/margin/marginLeft'
export { default as marginBottom } from './lib/margin/marginBottom'
export { default as marginRight } from './lib/margin/marginRight'
