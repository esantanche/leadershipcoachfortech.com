import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { APP_CONFIGURATION } from '../../appConfiguration';

import injectSheet from 'react-jss';

const styles = {
    WideContentPane: {
        minHeight: "8vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: props => props.backgroundColor ? props.backgroundColor : "inherit"
    },
    paneWidthLargeScreen: {
        width: "66vw"
    },
    paneWidthMediumScreen: {
        width: "83vw"
    },
    paneWidthSmallScreen: {
        width: "95vw"
    }
};

/**
 * Pane with variable width. The width is different for large, medium and small screens.
 * Used on the home
 *
 * @param {string} backgroundColor Background color
 * @param {object} classes Css-in-js classes from constant styles above
 */
class WideContentPane extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        backgroundColor: PropTypes.string,
    };

    render() {

        const { classes } = this.props;

        const screenWidth = window.innerWidth;

        let widthClassToUse;

        if (screenWidth >= APP_CONFIGURATION.responsiveBreakpoints.large)
            widthClassToUse = classes.paneWidthLargeScreen;
        else if (screenWidth >= APP_CONFIGURATION.responsiveBreakpoints.medium)
            widthClassToUse = classes.paneWidthMediumScreen;
        else
            widthClassToUse = classes.paneWidthSmallScreen;

        return (

                <div className={`${classes.WideContentPane} ${widthClassToUse}`}>

                    {this.props.children}

                </div>

            )

    }

}

export default injectSheet(styles)(WideContentPane);
