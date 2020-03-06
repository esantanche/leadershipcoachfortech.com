import React, { Component } from 'react';

/**
 * Error boundary for the entire application.
 *
 * When there is an error, the message below is shown instead of the app rendering.
 *
 * This way the user gets no cryptic error message.
 *
 * @see https://reactjs.org/docs/error-boundaries.html
 */
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    /**
     * On error, this component's state changes (hasError becomes true) and it re-renders.
     *
     * @param {object} error Ignored here
     * @returns {object} New state
     */
    static getDerivedStateFromError(error) {

        return {
            hasError: true
        }
    }

    render() {

        if (this.state.hasError) {
            return <h2>Some Error Spotted here! Please reload the page.</h2>
        } else {
            return this.props.children
        }

    }
}
export default ErrorBoundary;
