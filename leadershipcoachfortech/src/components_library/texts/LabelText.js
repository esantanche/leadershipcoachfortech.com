import React, { Component } from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import {APP_CONFIGURATION} from "../../appConfiguration";

const styles = {
    LabelText: {
        fontFamily: APP_CONFIGURATION.fontFamily,
        fontWeight: 600,
        fontSize: "1.15rem",
        color: APP_CONFIGURATION.defaultColorsTable["WHITESHADE"],
    }
};

/**
 * Text for field labels.
 *
 * Props
 * @param {object} classes Css-in-js classes from constant styles above
 */
class LabelText extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired
    };

    render() {

        const { classes } = this.props;

        return (

            <p className={`${classes.LabelText}`}>

                {this.props.children}

            </p>

        )

    }

}

export default injectSheet(styles)(LabelText);
