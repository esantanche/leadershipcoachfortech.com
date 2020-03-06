import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { APP_CONFIGURATION } from '../../appConfiguration';

import injectSheet from 'react-jss';

const styles = {
    ColumnsRowContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "flex-start"
    },
    ColumnsColumnContainer: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "flex-start"
    },
    Column: {
        width: "50%"
    }
};

/**
 * This pane implements a two columns system for content on large screen.
 * On small screen the two columns become one.
 *
 * @param {element} leftComponent What to show on the left (or above on small screen)
 * @param {element} rightComponent What to show on the right (or below on small screen)
 * @param {object} classes Css-in-js classes from constant styles above
 */
class ColumnsPane extends Component {

    static propTypes = {
        leftComponent: PropTypes.element,
        rightComponent: PropTypes.element,
        classes: PropTypes.object.isRequired
    };

    render() {

        const { classes } = this.props;

        const screenWidth = window.innerWidth;

        return (

                 (screenWidth >= APP_CONFIGURATION.responsiveBreakpoints.large) ?
                    (

                        <div className={classes.ColumnsRowContainer}>
                            <div className={classes.Column}>
                                {this.props.leftComponent}
                            </div>
                            <div className={classes.Column}>
                                {this.props.rightComponent}
                            </div>
                        </div>

                    )
                :
                    (

                        <div className={classes.ColumnsColumnContainer}>
                            <div>
                                {this.props.leftComponent}
                            </div>
                            <div>
                                {this.props.rightComponent}
                            </div>
                        </div>

                    )

            )

    }

}

export default injectSheet(styles)(ColumnsPane);
