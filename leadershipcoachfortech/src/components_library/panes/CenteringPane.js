import React, { Component } from 'react';

import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

const styles = {
    CenteringPane: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
};

/**
 * Just a pane to center elements.
 *
 * @param {object} classes Css-in-js classes from constant styles above
 */
class CenteringPane extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired
    };

    render() {

        const { classes } = this.props;

        return (

                <div className={`${classes.CenteringPane}`}>

                    {this.props.children}

                </div>

            )

    }

}

export default injectSheet(styles)(CenteringPane);
