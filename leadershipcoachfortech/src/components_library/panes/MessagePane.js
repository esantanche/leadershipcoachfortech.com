import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { APP_CONFIGURATION } from '../../appConfiguration';

import injectSheet from 'react-jss';

const styles = {
    MessagePane: {
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.96,
        height: "100%",
        width: "100%",
        zIndex: 20,
        backgroundColor: APP_CONFIGURATION.defaultColorsTable["DARKGREY"]
    },
    Hidden: {
        display: "none"
    }
};

/**
 * For the message dialog.
 *
 * @param {boolean} visible To show or hide the pane
 * @param {object} classes Css-in-js classes from constant styles above
 */
class MessagePane extends Component {

    static propTypes = {
        visible: PropTypes.bool,
        classes: PropTypes.object.isRequired
    };

    render() {

        const { classes, visible } = this.props;

        return (

            <div className={`${classes.MessagePane} ${visible ? "" : classes.Hidden }`}>

                {this.props.children}

            </div>

        )

    }

}

export default injectSheet(styles)(MessagePane);
