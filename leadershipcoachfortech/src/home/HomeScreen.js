import React, { Component } from 'react';
import FullViewPortPane from "../components_library/panes/FullViewPortPane";
import { APP_CONFIGURATION } from '../appConfiguration';
import ShieldPane from "../components_library/panes/ShieldPane";
import NarrationPane from "../components_library/panes/NarrationPane";
import NarrationText from "../components_library/texts/NarrationText";
import FullWidthPane from "../components_library/panes/FullWidthPane";
import HeadlinePane from "../components_library/panes/HeadlinePane";
import HeadlineText from "../components_library/texts/HeadlineText";
import ColumnsPane from "../components_library/panes/ColumnsPane";
import SeparatorPane from "../components_library/panes/SeparatorPane";
import CentredTextBox from "../components_library/boxes/CentredTextBox";
import ContentPane from "../components_library/panes/ContentPane";
import LetMeDefendYouScreen from "../let_me_defend_you/LetMeDefendYouScreen";
import WideContentPane from "../components_library/panes/WideContentPane";
import StandardLink from "../components_library/links/StandardLink";
import OneThirdHeightPane from "../components_library/panes/OneThirdHeightPane";
import CoverFittingImage from "../components_library/images/CoverFittingImage";

/**
 * Home Screen. Header and Footer are not here.
 */
class HomeScreen extends Component {

    state = { width: 0, height: 0 };

    // To refresh the component when the window resizes
    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    componentDidMount() {

        document.title = "Leadership Coach for Tech";

        window.addEventListener('resize', this.updateDimensions);

    }

    componentWillUnmount() {

        window.removeEventListener('resize', this.updateDimensions);

    }

    render() {

        const screenWidth = window.innerWidth;

        const itIsASmallScreen = (screenWidth < APP_CONFIGURATION.responsiveBreakpoints.large);

        return (

            <React.Fragment>

                <FullViewPortPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["BLUE"]}>
                    <ShieldPane>
                        <img src="shield-DARKGREY.png" alt="Leadership Coach for Tech" width="100%" />
                    </ShieldPane>
                    <NarrationPane>
                        <NarrationText>

                            <HeadlineText large={true}>
                                <i>Emanuele Santanche,<br/>leadership coach for technology.</i>
                            </HeadlineText>

                            <SeparatorPane/>

                            <HeadlineText large={true}>
                                <i>Defending your chances of success<br/>
                                   from lousy leadership practices.</i>
                            </HeadlineText>

                            <SeparatorPane/>

                            <HeadlineText large={true}>
                                <i>Taming the complexity beast &mdash; Tackling management by fear &mdash;
                                   Managing motivation &mdash; Managing time &mdash; Designing recruitment processes.</i>
                            </HeadlineText>

                            <SeparatorPane/>

                        </NarrationText>
                    </NarrationPane>
                </FullViewPortPane>

                <FullWidthPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["DARKERWHITESHADE"]}>
                    <ShieldPane>
                        <img src="shield-DARKGREY.png" alt="Leadership Coach for Tech" width="100%" />
                    </ShieldPane>

                    <SeparatorPane/>

                    <WideContentPane>

                        <ColumnsPane leftComponent={(

                                <StandardLink to={"/articles/services"}>
                                    <OneThirdHeightPane>
                                        <CoverFittingImage src={"/topics-kate-townsend-services-unsplash-602x400.jpg"}
                                                           alt={"Services"}
                                                           backgroundColor={APP_CONFIGURATION.defaultColorsTable["DARKGREY"]} />
                                    </OneThirdHeightPane>
                                    <CentredTextBox backgroundColor={APP_CONFIGURATION.defaultColorsTable["DARKGREY"]} size="short">
                                        <HeadlineText>Services</HeadlineText>
                                    </CentredTextBox>
                                </StandardLink>

                            )} rightComponent={(

                                <StandardLink to={"/articles/leadership"}>
                                    <OneThirdHeightPane>
                                        <CoverFittingImage src={"/topics-natalie-pedigo-leadership-unsplash-600x400.jpg"}
                                                           alt={"Leadership"}
                                                           backgroundColor={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]} />
                                    </OneThirdHeightPane>
                                    <CentredTextBox backgroundColor={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]} size="short">
                                        <HeadlineText>Leadership</HeadlineText>
                                    </CentredTextBox>
                                </StandardLink>

                            )}>

                        </ColumnsPane>

                    </WideContentPane>

                    <WideContentPane>

                        <ColumnsPane leftComponent={(

                            <StandardLink to={"/articles/testimonials"}>
                                <OneThirdHeightPane>
                                    <CoverFittingImage src={"/topics-campaign-creators-testimonials-unsplash-600x400.jpg"}
                                                       alt={"Testimonials"}
                                                       backgroundColor={itIsASmallScreen ?
                                                           APP_CONFIGURATION.defaultColorsTable["DARKGREY"] :
                                                           APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]} />
                                </OneThirdHeightPane>
                                <CentredTextBox backgroundColor={itIsASmallScreen ?
                                    APP_CONFIGURATION.defaultColorsTable["DARKGREY"] :
                                    APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]} size="short">
                                    <HeadlineText>Testimonials</HeadlineText>
                                </CentredTextBox>
                            </StandardLink>

                        )} rightComponent={(

                            <StandardLink to={"/articles/success-stories"}>
                                <OneThirdHeightPane>
                                    <CoverFittingImage src={"/topics-doran-erickson-success-stories-unsplash-766x400.jpg"}
                                                       alt={"Success stories"}
                                                       backgroundColor={itIsASmallScreen ?
                                                           APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"] :
                                                           APP_CONFIGURATION.defaultColorsTable["DARKGREY"]} />
                                </OneThirdHeightPane>
                                <CentredTextBox backgroundColor={itIsASmallScreen ?
                                    APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"] :
                                    APP_CONFIGURATION.defaultColorsTable["DARKGREY"]} size="short">
                                    <HeadlineText>Success stories</HeadlineText>
                                </CentredTextBox>
                            </StandardLink>

                        )}>
                        </ColumnsPane>

                    </WideContentPane>

                    <WideContentPane>

                        <ColumnsPane leftComponent={(

                            <StandardLink to={"/articles/tech-watch"}>
                                <OneThirdHeightPane>
                                    <CoverFittingImage src={"/topics-alex-knight-tech-watch-unsplash-600x400.jpg"}
                                                       alt={"Tech watch"}
                                                       backgroundColor={APP_CONFIGURATION.defaultColorsTable["DARKGREY"]} />
                                </OneThirdHeightPane>
                                <CentredTextBox backgroundColor={APP_CONFIGURATION.defaultColorsTable["DARKGREY"]} size="short">
                                    <HeadlineText>Tech watch</HeadlineText>
                                </CentredTextBox>
                            </StandardLink>

                        )} rightComponent={(

                            null

                        )}>
                        </ColumnsPane>

                    </WideContentPane>

                    <SeparatorPane/>

                </FullWidthPane>

                <FullWidthPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["DARKGREY"]}>
                    <ShieldPane>
                        <img src="shield-LIGHTGREY.png" alt="Leadership Coach for Tech" width="100%" />
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

            </React.Fragment>

        );
    }
}

export default HomeScreen;
