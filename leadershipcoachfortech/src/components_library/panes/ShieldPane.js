import React, { Component } from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

const styles = {
    ShieldPane: {
        width: "15vw",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "7vh"
    }
};

/**
 * Contains the shield
 */
class ShieldPane extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired
    };

    render() {

        const { classes } = this.props;

        return (

                <div className={classes.ShieldPane}>
                    {this.props.children}
                </div>

            )

    }

}

export default injectSheet(styles)(ShieldPane);
