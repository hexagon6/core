import construct from '../util/construct'

/**
 * Returns a function that takes an object containing padding and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${padding()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${padding(20)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${padding('1.5rem')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${padding({ breakpoint1: 20, breakpoint2: '1.5rem'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a padding value
 * @returns {function(props)} Function to take component props passed by styled-components
 * @name padding
 * @memberOf core
 */
export default (fallback) => ({ padding, theme }) =>
  construct(padding || fallback, theme, 'padding')
