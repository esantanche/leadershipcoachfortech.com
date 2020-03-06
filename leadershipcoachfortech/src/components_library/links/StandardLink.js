import React, { Component } from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

import {Link} from "react-router-dom";

const styles = {
    StandardLink: {
        color: "inherit",
        textDecoration: "none"
    }
};

/**
 * Encapsulation of React Link component
 *
 * @param {object} classes Css-in-js classes from constant styles above
 * @param {string} to URL the link targets
 * @param {function} onclick Function to call when the link is clicked
 */
class StandardLink extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        to: PropTypes.string,
        onclick: PropTypes.func
    };

    render() {

        const { classes, to, onclick } = this.props;

        return (

            <Link className={`${classes.StandardLink}`} to={to} onClick={onclick}>

                {this.props.children}

            </Link>

        )

    }

}

export default injectSheet(styles)(StandardLink);
