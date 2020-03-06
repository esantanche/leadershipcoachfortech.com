import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { APP_CONFIGURATION } from '../../appConfiguration';

import injectSheet from 'react-jss';

const styles = {
    ContentPane: {
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: props => props.color
    },
    paneWidthLargeScreen: {
        width: "50vw"
    },
    paneWidthMediumScreen: {
        width: "60vw"
    },
    paneWidthSmallScreen: {
        width: "90vw"
    }
};

/**
 * Pane with variable width. The width is different for large, medium and small screens.
 *
 * @param {string} color Background color
 * @param {object} classes Css-in-js classes from constant styles above
 */
class ContentPane extends Component {

    static propTypes = {
        color: PropTypes.string,
        classes: PropTypes.object.isRequired
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

                <div className={`${classes.ContentPane} ${widthClassToUse}`}>

                    {this.props.children}

                </div>

            )

    }

}

export default injectSheet(styles)(ContentPane);
