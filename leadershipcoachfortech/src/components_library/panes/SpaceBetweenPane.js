import React, { Component } from 'react';

import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

const styles = {
    SpaceBetweenPane: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
};

/**
 * Pane used to apply a space-between flex model.
 * Items are evenly distributed in the line.
 * Used in the footer.
 *
 */
class SpaceBetweenPane extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired
    };

    render() {

        const { classes } = this.props;

        return (

                <div className={`${classes.SpaceBetweenPane}`}>

                    {this.props.children}

                </div>

            )

    }

}

export default injectSheet(styles)(SpaceBetweenPane);
