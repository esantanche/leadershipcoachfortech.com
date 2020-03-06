import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { APP_CONFIGURATION } from '../../appConfiguration';

import injectSheet from 'react-jss';

const styles = {
    MenuButtonPane: {
        position: "fixed",
        top: "3vh",
        right: "5vw",
        color: APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]
    },
    Hidden: {
        display: "none"
    }
};

/**
 * This is the menu button in the top right corner.
 *
 * @param {boolean} visible To show or hide the pane
 * @param {object} classes Css-in-js classes from constant styles above
 */
class MenuButtonPane extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        visible: PropTypes.bool
    };

    render() {

        const { classes } = this.props;

        return (

            <div className={`${classes.MenuButtonPane} ${this.props.visible ? "" : classes.Hidden }`}>

                {this.props.children}

            </div>

        )

    }

}

export default injectSheet(styles)(MenuButtonPane);
