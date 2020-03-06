import React, { Component } from 'react';
import PropTypes from 'prop-types';

import injectSheet from 'react-jss';

const styles = {
    HeaderImage: {
        width: "100%",
        backgroundColor: props => props.backgroundColor
    }
};

/**
 * Displays an header image above the text of an article.
 * To be used on the page where an article is displayed alone (see ArticleScreen).
 *
 * @param {string} src src attribute for the image
 * @param {string} alt alt attribute for the image
 * @param {string} backgroundColor Background color for the image. Needed for png images with transparency
 * @param {object} classes Css-in-js classes from constant styles above
 */
class HeaderImage extends Component {

    static propTypes = {
        backgroundColor: PropTypes.string,
        src: PropTypes.string,
        alt: PropTypes.string,
        classes: PropTypes.object.isRequired
    };

    render() {

        const { classes, src, alt } = this.props;

        return (

            <img src={src} alt={alt} className={`${classes.HeaderImage}`} />

        )

    }

}

export default injectSheet(styles)(HeaderImage);
