import React, { Component } from 'react';

import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

const styles = {
    HomeAndCloseButtonsPane: {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        marginBottom: "5vh"
    }
};

/**
 * Pane for the home and close buttons on the menu.
 *
 */
class HomeAndCloseButtonsPane extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired
    };

    render() {

        const { classes } = this.props;

        return (

            <div className={`${classes.HomeAndCloseButtonsPane}`}>

                {this.props.children}

            </div>

        )

    }

}

export default injectSheet(styles)(HomeAndCloseButtonsPane);
