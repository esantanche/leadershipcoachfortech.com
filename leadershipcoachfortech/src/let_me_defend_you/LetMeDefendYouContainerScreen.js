import React, { Component } from 'react';

import AppContext from '../Context';

import { APP_CONFIGURATION } from "../appConfiguration";

import SeparatorPane from "../components_library/panes/SeparatorPane";
import ShieldPane from "../components_library/panes/ShieldPane";
import HeadlinePane from "../components_library/panes/HeadlinePane";
import HeadlineText from "../components_library/texts/HeadlineText";
import ContentPane from "../components_library/panes/ContentPane";
import LetMeDefendYouScreen from "./LetMeDefendYouScreen";
import FullWidthPane from "../components_library/panes/FullWidthPane";

const documentTitle = "Leadership Coach for Tech, Contact me";

/**
 * This screen is used when displaying the "Let me defend you!" form (Contact me) separately from the home.
 */
class LetMeDefendYouContainerScreen extends Component {

    static contextType = AppContext;

    // To refresh the component when the window resizes
    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    componentDidMount() {

        document.title = documentTitle;

        window.addEventListener('resize', this.updateDimensions);

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        document.title = documentTitle;
    }

    componentWillUnmount() {

        window.removeEventListener('resize', this.updateDimensions);

    }

    render() {

        return (

            <FullWidthPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["LIGHTGREY"]}>
                <ShieldPane>
                    <img src="shield-DARKGREY.png" alt="Leadership Coach for Tech" width="100%" />
                </ShieldPane>

                <HeadlinePane>
                    <HeadlineText color={APP_CONFIGURATION.defaultColorsTable["DARKERWHITESHADE"]}>
                        Contact me
                    </HeadlineText>
                </HeadlinePane>

                <SeparatorPane/>

                <ContentPane>

                    <LetMeDefendYouScreen/>

                </ContentPane>

                <SeparatorPane/>

            </FullWidthPane>

        )

    }

}

export default LetMeDefendYouContainerScreen;
