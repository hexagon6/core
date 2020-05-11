import construct from '../util/construct'

/**
 * Returns a function that takes an object containing marginBottom and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${marginBottom()}
 * `
 * @example
 * const MyComponentWithFallback = styled.div`
 *   ${marginBottom({ breakpoint1: '1rem', breakpoint2: 10})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a marginBottom value
 * @returns {function(props)} Component props passed by styled-components
 * @name marginBottom
 */
export default (fallback) => ({ marginBottom, theme }) =>
  construct(marginBottom || fallback, theme, 'margin-bottom')
