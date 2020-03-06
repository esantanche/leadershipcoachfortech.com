import React, { Component } from 'react';

import injectSheet from 'react-jss';

import PropTypes from 'prop-types';

const styles = {
    FullWidthPane: {
        width: "100vw",
        maxWidth: "100%",
        paddingTop: "7vh",
        backgroundColor: props => props.backgroundColor
    }
};

/**
 * Largely used on the home for the sections with boxes.
 *
 * @param {string} backgroundColor Background color
 * @param {object} classes Css-in-js classes from constant styles above
 */
class FullWidthPane extends Component {

    static propTypes = {
        backgroundColor: PropTypes.string,
        classes: PropTypes.object.isRequired
    };

    render() {

        const { classes } = this.props;

        return (

                <div className={classes.FullWidthPane}>
                    {this.props.children}
                </div>

            )

    }

}

export default injectSheet(styles)(FullWidthPane);
