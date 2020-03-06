import React, { Component } from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import {APP_CONFIGURATION} from "../../appConfiguration";

const styles = {
    HeadlineText: {
        fontFamily: APP_CONFIGURATION.fontFamily,
        fontWeight: 600,
        textAlign: "center",
        color: props => props.color,
    },
    textSizeLargeScreen: {
        fontSize: "1.55rem"
    },
    textSizeMediumScreen: {
        fontSize: "1.35rem"
    },
    textSizeSmallScreen: {
        fontSize: "1.15rem"
    },
    largeTextSizeLargeScreen: {
        fontSize: "2.4rem"
    },
    largeTextSizeMediumScreen: {
        fontSize: "2.09rem"
    },
    largeTextSizeSmallScreen: {
        fontSize: "1.78rem"
    }
};

/**
 * Used in home page for headlines. Font size is responsive.
 * Two sets of sizes are possible. A standard one and a large one.
 *
 * Props
 * @param {object} classes Css-in-js classes from constant styles above
 * @param {boolean} large True if the large font size is to be used
 * @param {string} color Text color
 */
class HeadlineText extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        large: PropTypes.bool,
        color: PropTypes.string
    };

    render() {

        const { classes } = this.props;

        const screenWidth = window.innerWidth;

        let textSizeClassNameToUse;

        if (screenWidth >= APP_CONFIGURATION.responsiveBreakpoints.large)
            textSizeClassNameToUse = "LargeScreen";
        else if (screenWidth >= APP_CONFIGURATION.responsiveBreakpoints.medium)
            textSizeClassNameToUse = "MediumScreen";
        else
            textSizeClassNameToUse = "SmallScreen";

        if (this.props.large)
            textSizeClassNameToUse = "largeTextSize" + textSizeClassNameToUse;
        else
            textSizeClassNameToUse = "textSize" + textSizeClassNameToUse;

        return (

            <div className={`${classes.HeadlineText} ${classes[textSizeClassNameToUse]}`}>

                {this.props.children}

            </div>

        )

    }

}

HeadlineText.defaultProps = {
    color: APP_CONFIGURATION.defaultColorsTable["WHITESHADE"]
};

export default injectSheet(styles)(HeadlineText);
