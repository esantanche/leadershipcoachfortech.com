import React, { Component } from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

const styles = {
    StandardIcon: {
        fontSize: "3rem",
        cursor: props => props.onclick ? "pointer" : "default"
    }
};

/**
 * Icon component used to show icons like the home or the close ones.
 *
 * Props
 * @param {object} classes Classes injected by withStyles function
 * @param {function} onclick Function to call when the icon is clicked
 */
class StandardIcon extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        onclick: PropTypes.func
    };

    render() {

        const { classes, onclick } = this.props;

        return (

            <i className={`material-icons ${classes.StandardIcon}`} onClick={onclick}>

                {this.props.children}

            </i>

        )

    }

}

export default injectSheet(styles)(StandardIcon);
