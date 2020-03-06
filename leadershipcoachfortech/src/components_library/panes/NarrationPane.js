import React, { Component } from 'react';

import { APP_CONFIGURATION } from '../../appConfiguration';

import injectSheet from 'react-jss';

import PropTypes from 'prop-types';


const styles = {
    NarrationPane: {
        minHeight: "45vh",
        marginLeft: "auto",
        marginRight: "auto"
    },
    paneWidthLargeScreen: {
        width: "50vw"
    },
    paneWidthMediumScreen: {
        width: "65vw"
    },
    paneWidthSmallScreen: {
        width: "80vw"
    }
};

/**
 * Pane that contains the messages on the home.
 *
 * The width varies with the screen size, large, medium, small.
 *
 * @param {object} classes Css-in-js classes from constant styles above
 */
class NarrationPane extends Component {

    static propTypes = {
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

                <div className={`${classes.NarrationPane} ${widthClassToUse}`}>
                    {this.props.children}
                </div>

            )

    }

}

export default injectSheet(styles)(NarrationPane);
