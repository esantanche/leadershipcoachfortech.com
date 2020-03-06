import React, { Component } from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

const styles = {
    PaddingPane: {
        paddingLeft: props => props.isItLeftPadding ? "5vw" : "0",
        paddingRight: props => props.isItLeftPadding ? "0" : "5vw"
    }
};

/**
 * Some padding for the home and close button on the menu.
 *
 * @param {boolean} isItLeftPadding True if the padding is needed on the left
 */
class PaddingPane extends Component {

    static propTypes = {
        isItLeftPadding: PropTypes.bool,
        classes: PropTypes.object.isRequired,
    };

    render() {

        const { classes } = this.props;

        return (

            <div className={`${classes.PaddingPane}`}>

                {this.props.children}

            </div>

        )

    }

}

export default injectSheet(styles)(PaddingPane);
