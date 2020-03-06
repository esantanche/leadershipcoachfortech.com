import React, { Component } from 'react';

// To provide this component with the application context
// See AppContext.js
import AppContext from "../Context";
import ContentPane from "../components_library/panes/ContentPane";
import {APP_CONFIGURATION} from "../appConfiguration";
import HeadlineText from "../components_library/texts/HeadlineText";
import FullWidthPane from "../components_library/panes/FullWidthPane";
import MenuPane from "../components_library/panes/MenuPane";
import HomeAndCloseButtonsPane from "../components_library/panes/HomeAndCloseButtonsPane";
import CentredTextBox from "../components_library/boxes/CentredTextBox";
import ColumnsPane from "../components_library/panes/ColumnsPane";
import StandardLink from "../components_library/links/StandardLink";
import PropTypes from 'prop-types';
import StandardIcon from "../components_library/icons/StandardIcon";
import PaddingPane from "../components_library/panes/PaddingPane";

/**
 * The menu you get when you click on the menu button in the top right corner
 *
 * @param {boolean} open True is the menu should show
 * @param {function} onHome Function to call when the home button is clicked
 * @param {function} onClose Function to call when the close button is clicked
 */
class MenuScreen extends Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);

        const screenWidth = window.innerWidth;

        this.state = { itIsASmallScreen:
                screenWidth < APP_CONFIGURATION.responsiveBreakpoints.large };

    }

    static propTypes = {
        open: PropTypes.bool,
        onHome: PropTypes.func,
        onClose: PropTypes.func
    };

    // To refresh the component when the window resizes
    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    componentDidMount() {

        window.addEventListener('resize', this.updateDimensions);

    }

    componentWillUnmount() {

        window.removeEventListener('resize', this.updateDimensions);

    }

    /**
     * Determined the background color to use for a box.
     * Colors are different if the screen is a small one because in that case the boxes
     * are not side by side but one above the other.
     * When boxes are one above the other, a box and the next won't have the same background color.
     *
     * @param rowNumber Row number of the box
     * @param columnName "right" or "left" column
     * @returns {string} Background color
     */
    colorForCentredTextBox(rowNumber, columnName) {

        let colorToReturn;
        const color1 = APP_CONFIGURATION.defaultColorsTable["BLUE"];
        const color2 = APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"];

        if (this.state.itIsASmallScreen) {
            colorToReturn = columnName === "right" ? color1 : color2;
        } else {
            if (rowNumber % 2 === 0) {
                colorToReturn = columnName === "right" ? color1 : color2;
            } else {
                colorToReturn = columnName === "right" ? color2 : color1;
            }
        }

        return colorToReturn;
    };

    render() {

        return (

            <MenuPane visible={this.props.open}>

                <FullWidthPane>

                    <HomeAndCloseButtonsPane>

                        <PaddingPane isItLeftPadding={true}>
                            <StandardIcon onclick={this.props.onHome}>home</StandardIcon>
                        </PaddingPane>
                        <PaddingPane>
                            <StandardIcon onclick={this.props.onClose}>close</StandardIcon>
                        </PaddingPane>

                    </HomeAndCloseButtonsPane>

                    <ContentPane>

                        <ColumnsPane leftComponent={(

                            <StandardLink to="/articles/services" onclick={this.props.onClose}>
                                <CentredTextBox backgroundColor={this.colorForCentredTextBox(1, "left")}
                                                size="veryshort">
                                    <HeadlineText>Services</HeadlineText>
                                </CentredTextBox>
                            </StandardLink>

                        )} rightComponent={(

                            <StandardLink to="/articles/success-stories" onclick={this.props.onClose}>
                                <CentredTextBox backgroundColor={this.colorForCentredTextBox(1, "right")}
                                                size="veryshort">
                                    <HeadlineText>Success stories</HeadlineText>
                                </CentredTextBox>
                            </StandardLink>

                        )}>
                        </ColumnsPane>

                        <ColumnsPane leftComponent={(

                            <StandardLink to="/articles/leadership" onclick={this.props.onClose}>
                                <CentredTextBox backgroundColor={this.colorForCentredTextBox(2, "left")}
                                                size="veryshort">
                                    <HeadlineText>Leadership articles</HeadlineText>
                                </CentredTextBox>
                            </StandardLink>

                        )} rightComponent={(

                            <StandardLink to="/articles/testimonials" onclick={this.props.onClose}>
                                <CentredTextBox backgroundColor={this.colorForCentredTextBox(2, "right")}
                                                size="veryshort">
                                    <HeadlineText>Testimonials</HeadlineText>
                                </CentredTextBox>
                            </StandardLink>
                        )}>
                        </ColumnsPane>

                        <ColumnsPane leftComponent={(

                            <StandardLink to="/articles/tech-watch" onclick={this.props.onClose}>
                                <CentredTextBox backgroundColor={this.colorForCentredTextBox(3, "left")}
                                                size="veryshort">
                                    <HeadlineText>Tech watch</HeadlineText>
                                </CentredTextBox>
                            </StandardLink>

                        )} rightComponent={(

                            <StandardLink to="/article/137/about-me" onclick={this.props.onClose}>
                                <CentredTextBox backgroundColor={this.colorForCentredTextBox(3, "right")}
                                                size="veryshort">
                                    <HeadlineText>About me</HeadlineText>
                                </CentredTextBox>
                            </StandardLink>

                        )}>
                        </ColumnsPane>

                        <ColumnsPane leftComponent={(

                            <StandardLink to="/let-me-defend-you" onclick={this.props.onClose}>
                                <CentredTextBox backgroundColor={this.colorForCentredTextBox(4, "left")}
                                                size="veryshort">
                                    <HeadlineText>Contact me</HeadlineText>
                                </CentredTextBox>
                            </StandardLink>

                        )} rightComponent={
                            null
                        }>
                        </ColumnsPane>

                    </ContentPane>

                </FullWidthPane>

            </MenuPane>

        )

    }

}

export default MenuScreen;
