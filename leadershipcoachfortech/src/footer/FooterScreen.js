import React, { Component } from 'react';

import WideContentPane from "../components_library/panes/WideContentPane";
import {APP_CONFIGURATION} from "../appConfiguration";
import FullWidthPane from "../components_library/panes/FullWidthPane";
import NarrationText from "../components_library/texts/NarrationText";
import StandardLink from "../components_library/links/StandardLink";
import SpaceBetweenPane from "../components_library/panes/SpaceBetweenPane";
import MarginTopPane from "../components_library/panes/MarginTopPane";

/**
 * The footer at the bottom of the page.
 */
class FooterScreen extends Component {

    render() {

        return (

            <FullWidthPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["WHITESHADE"]}>

                <WideContentPane backgroundColor="inherit">

                    <SpaceBetweenPane>

                        <div>
                            <NarrationText color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}>
                                Emanuele Santanché
                            </NarrationText>

                            <NarrationText color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}>
                                Leadership coach for technology
                            </NarrationText>
                        </div>

                        <MarginTopPane>

                            <NarrationText color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}>
                                <StandardLink to="/article/58/privacy-policy">
                                    <p>Privacy policy</p>
                                </StandardLink>
                            </NarrationText>

                        </MarginTopPane>

                    </SpaceBetweenPane>

                </WideContentPane>

            </FullWidthPane>

        )
    }

}

export default FooterScreen;
