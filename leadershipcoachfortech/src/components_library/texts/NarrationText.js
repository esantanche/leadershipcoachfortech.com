import React, { Component } from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';
import {APP_CONFIGURATION} from "../../appConfiguration";

const styles = {
    NarrationText: {
        fontFamily: APP_CONFIGURATION.fontFamily,
        fontWeight: 400,
        color: props => props.color
    },
    textSizeLargeScreen: {
        fontSize: "1.35rem"
    },
    textSizeMediumScreen: {
        fontSize: "1.2rem"
    },
    textSizeSmallScreen: {
        fontSize: "1.1rem"
    }
};

/**
 * Used on the home for the text you find under the shields.
 *
 * It's responsive.
 *
 * Props
 * @param {object} classes Css-in-js classes from constant styles above
 */
class NarrationText extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired
    };

    render() {

        const { classes } = this.props;

        const screenWidth = window.innerWidth;

        let textSizeClassToUse;

        if (screenWidth >= APP_CONFIGURATION.responsiveBreakpoints.large)
            textSizeClassToUse = classes.textSizeLargeScreen;
        else if (screenWidth >= APP_CONFIGURATION.responsiveBreakpoints.medium)
            textSizeClassToUse = classes.textSizeMediumScreen;
        else
            textSizeClassToUse = classes.textSizeSmallScreen;

        return (

            <div className={`${classes.NarrationText} ${textSizeClassToUse}`}>

                {this.props.children}

            </div>

        )

    }

}

NarrationText.defaultProps = {
    color: APP_CONFIGURATION.defaultColorsTable["WHITESHADE"]
};


export default injectSheet(styles)(NarrationText);
