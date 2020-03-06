import React, { Component } from 'react';

import { APP_CONFIGURATION } from '../../appConfiguration';

import injectSheet from 'react-jss';

import PropTypes from 'prop-types';

const styles = {
    HeadlinePane: {
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
 * Pane that contains head lines. Used on the home.
 * The head line will occupy different widths on different screens (large, nedium, small)
 *
 * @param {object} classes Css-in-js classes from constant styles above
 */
class HeadlinePane extends Component {

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

                <div className={`${classes.HeadlinePane} ${widthClassToUse}`}>
                    {this.props.children}
                </div>

            )

    }

}

export default injectSheet(styles)(HeadlinePane);
