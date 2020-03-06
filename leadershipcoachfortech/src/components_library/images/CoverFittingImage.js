import React, { Component } from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

const styles = {
    CoverFittingImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        backgroundColor: props => props.backgroundColor
    }
};

/**
 * Displays an image with object-fit attribute "cover".
 * objectFit = cover means: The replaced content is sized to maintain its aspect ratio while
 * filling the element's entire content box. The object will be clipped to fit
 *
 * @param {string} src src attribute for the image
 * @param {string} alt alt attribute for the image
 * @param {string} backgroundColor Background color for the image. Needed for png images with transparency
 * @param {object} classes Css-in-js classes from constant styles above
 */
class CoverFittingImage extends Component {

    static propTypes = {
        backgroundColor: PropTypes.string,
        src: PropTypes.string,
        alt: PropTypes.string,
        classes: PropTypes.object.isRequired
    };

    render() {

        const { classes, src, alt } = this.props;

        return (

            <img src={src} alt={alt} className={`${classes.CoverFittingImage}`} />

        )

    }

}

export default injectSheet(styles)(CoverFittingImage);
