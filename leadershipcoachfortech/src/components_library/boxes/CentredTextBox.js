import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { APP_CONFIGURATION } from '../../appConfiguration';

import injectSheet from 'react-jss';

// Three possible heights for the Centred Text Box
const sizes = { "standard": "25vh",
                "short": "15vh",
                "veryshort": "7vh" };

const styles = {
    CentredTextBox: {
        height: props => sizes[props.size] ? sizes[props.size] : "25vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: props => props.backgroundColor
    },
    InnerText: {
        paddingLeft: "20px",
        paddingRight: "20px"
    }
};

/**
 * This is the box that contains headers like "Success stories" in the home page
 *
 * @param {string} backgroundColor Background color for the box
 * @param {string} size One of standard, short or veryshort for different box heights
 * @param {object} classes Css-in-js classes from constant styles above
 */
class CentredTextBox extends Component {

    // The background color of this component can be passed
    // The default is below
    static propTypes = {
        backgroundColor: PropTypes.string,
        size: PropTypes.string,
        classes: PropTypes.object.isRequired,
    };

    render() {

        const { classes } = this.props;

        return (

                <div className={classes.CentredTextBox}>

                    <div className={classes.InnerText}>{this.props.children}</div>

                </div>

            )

    }

}

// Set default props
CentredTextBox.defaultProps = {
    backgroundColor: APP_CONFIGURATION.defaultColorsTable["DARKGREY"]
};

export default injectSheet(styles)(CentredTextBox);
