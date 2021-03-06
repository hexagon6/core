import construct from '../util/construct'

/**
 * Returns a function that takes an object containing float and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${float()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${float('left')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${float({ breakpoint1: 'left', breakpoint2: 'right'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a float value
 * @returns {function(props)} Function to take component props passed by styled-components
 * @name float
 * @memberOf core
 */
export default (fallback) => ({ float, theme }) =>
  construct(float || fallback, theme, 'float')
