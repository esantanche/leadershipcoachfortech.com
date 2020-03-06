import React, { Component } from 'react';

// To provide this component with the application context
// See AppContext.js
import AppContext from "../Context";
import CentralContentPane from "../components_library/panes/ContentPane";
import NarrationText from "../components_library/texts/NarrationText";
import {APP_CONFIGURATION} from "../appConfiguration";
import HeadlineText from "../components_library/texts/HeadlineText";
import SeparatorPane from "../components_library/panes/SeparatorPane";
import * as Sentry from "@sentry/browser";
import HeaderImage from "../components_library/images/HeaderImage";
import MetaTags from 'react-meta-tags';

/**
 * Screen showing a single article. The text can contain html tags. In this case we render them.
 */
class ArticleScreen extends Component {

    static contextType = AppContext;

    constructor(props) {
        super(props);

        this.state = { article: [ { } ] };

    }

    // To refresh the component when the window resizes
    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    /**
     * When the component mounts, we fetch the article we have to display.
     *
     * The url that triggers displaying this Screen is like this:
     * /article/:articlenid
     *
     * For example it can be: /article/27
     *
     * The number is the node id of the article in the Drupal backend.
     *
     * This component uses the service ArticleService for it to fetch
     * that specific article.
     */
    componentDidMount() {

        if (!this.props.match.params.articlenid) {


            const error_message = `ArticleScreen::componentDidMount
                                   this.props.match.params.articlenid is not defined
                                   This is a bug`;

            console.error("ArticleScreen::componentDidMount");
            console.error("this.props.match.params.articlenid is not defined");
            console.error("This is a bug");

            Sentry.captureMessage(error_message);

            return;
        }

        this.context.context.ArticleService.get_articles({ nid: this.props.match.params.articlenid },
            (response) => {

                this.setState({ article: response.articles });

                document.title = `Leadership Coach for Tech, ${response.articles[0].title}`;

            }

        );

        window.addEventListener('resize', this.updateDimensions);

    }

    /**
     * Have to reload the article if the article id is different.
     *
     * @param prevProps
     * @param prevState
     * @param snapshot
     */
    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.match.params.articlenid !== this.props.match.params.articlenid) {

            this.context.context.ArticleService.get_articles({ nid: this.props.match.params.articlenid },
                (response) => {

                    this.setState({ article: response.articles });

                    document.title = `Leadership Coach for Tech, ${response.articles[0].title}`;

                }

            )

        }

    }

    componentWillUnmount() {

        window.removeEventListener('resize', this.updateDimensions);

    }

    render() {

        // MetaTags are for LinkedIn to properly fetch title and image
        // TODO I need to server-render the website for LinkedIn to actually see these meta tags

        return (

            <React.Fragment>

                <MetaTags>
                    <meta property="og:title" content={this.state.article[0].title} />
                    <meta property="og:image" content={this.state.article[0].field_header_image ?
                        APP_CONFIGURATION.backendUrl + this.state.article[0].field_header_image :
                        APP_CONFIGURATION.backendUrl + this.state.article[0].field_image} />
                </MetaTags>

                <CentralContentPane>

                    {this.state.article[0].field_header_image &&
                        <HeaderImage src={APP_CONFIGURATION.backendUrl + this.state.article[0].field_header_image}
                                     alt={this.state.article[0].title}
                                     backgroundColor={APP_CONFIGURATION.defaultColorsTable["DARKGREY"]} />
                    }

                    <SeparatorPane />

                    <HeadlineText color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}
                                  large={true}>

                        {this.state.article[0].title}

                    </HeadlineText>

                    <NarrationText color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}>

                        <div dangerouslySetInnerHTML={{ __html: this.state.article[0].body }} />

                    </NarrationText>

                </CentralContentPane>

            </React.Fragment>

        )

    }

}

export default ArticleScreen;
