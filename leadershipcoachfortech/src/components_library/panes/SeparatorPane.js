import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const sizes = { "standard": "5vh",
                "short": "20px" };

const styles = {
    SeparatorPane: {
        height: props => sizes[props.size] ? sizes[props.size] : sizes["standard"]
    }
};

/**
 * Just a separator in two sizes.
 *
 */
class SeparatorPane extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        size: PropTypes.string
    };

    render() {

        const { classes } = this.props;

        return (

                <div className={classes.SeparatorPane} />

            )

    }

}

export default injectSheet(styles)(SeparatorPane);
