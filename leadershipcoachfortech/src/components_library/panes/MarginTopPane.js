import React, { Component } from 'react';

import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

const sizes = { "standard": "2px",
                "tall": "20px" };

const styles = {
    MarginTopPane: {
        marginTop: props => sizes[props.size] ? sizes[props.size] : sizes["standard"],
        display: "block"
    }
};

/**
 * Margin used in a few places
 *
 * @param {string} size How tall the margin should be, 'standard' or 'tall'?
 * @param {object} classes Css-in-js classes from constant styles above
 */
class MarginTopPane extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        size: PropTypes.string
    };

    render() {

        const { classes } = this.props;

        return (

                <div className={`${classes.MarginTopPane}`}>

                    {this.props.children}

                </div>

            )

    }

}

export default injectSheet(styles)(MarginTopPane);
