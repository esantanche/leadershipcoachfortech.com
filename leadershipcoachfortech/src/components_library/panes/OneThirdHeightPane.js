import React, { Component } from 'react';

import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

const styles = {
    OneThirdHeightPane: {
        height: "33vh"
    },
};

/**
 * Used in articles lists for the images. They have to be 33vh high.
 *
 *
 */
class OneThirdHeightPane extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired
    };

    render() {

        const { classes } = this.props;

        return (

                <div className={`${classes.OneThirdHeightPane}`}>

                    {this.props.children}

                </div>

            )

    }

}

export default injectSheet(styles)(OneThirdHeightPane);
