import React, { Component } from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import {APP_CONFIGURATION} from "../../appConfiguration";

const styles = {
    StandardButton: {
        background: APP_CONFIGURATION.defaultColorsTable["BLUE"],
        borderColor: APP_CONFIGURATION.defaultColorsTable["BLUE"],
        fontFamily: APP_CONFIGURATION.fontFamily,
        fontWeight: 600,
        fontSize: "1.15rem",
        padding: "11px 18px",
        cursor: "pointer",
        color: APP_CONFIGURATION.defaultColorsTable["WHITESHADE"]
    }
};

/**
 * Standard button.
 *
 * @param {function} onclick Function to call when the button is clicked
 * @param {object} classes Css-in-js classes from constant styles above
 */
class StandardButton extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        onclick: PropTypes.func
    };

    render() {

        const { classes, onclick } = this.props;

        return (

            <button className={`${classes.StandardButton}`} onClick={onclick}>

                {this.props.children}

            </button>

        )

    }

}

export default injectSheet(styles)(StandardButton);
