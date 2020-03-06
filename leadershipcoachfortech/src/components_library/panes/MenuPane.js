import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { APP_CONFIGURATION } from '../../appConfiguration';

import injectSheet from 'react-jss';

const styles = {
    MenuPane: {
        position: "fixed",
        opacity: 0.9,
        minHeight: "100%",
        zIndex: 20,
        backgroundColor: APP_CONFIGURATION.defaultColorsTable["DARKERWHITESHADE"]
    },
    Hidden: {
        display: "none"
    }
};

/**
 * This is the menu
 *
 * @param {boolean} visible To show or hide the pane
 * @param {object} classes Css-in-js classes from constant styles above
 */
class MenuPane extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        visible: PropTypes.bool
    };

    render() {

        const { classes } = this.props;

        return (

            <div className={`${classes.MenuPane} ${this.props.visible ? "" : classes.Hidden }`}>

                {this.props.children}

            </div>

        )

    }

}

export default injectSheet(styles)(MenuPane);
