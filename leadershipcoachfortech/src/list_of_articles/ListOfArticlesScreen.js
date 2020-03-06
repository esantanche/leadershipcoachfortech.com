import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppContext from "../Context";
import HeadlineText from "../components_library/texts/HeadlineText";
import CentredTextBox from "../components_library/boxes/CentredTextBox";
import {APP_CONFIGURATION} from "../appConfiguration";
import ColumnsPane from "../components_library/panes/ColumnsPane";

import { titleToSlug } from '../helpers/title_to_slug';
import WideContentPane from "../components_library/panes/WideContentPane";
import StandardButton from "../components_library/buttons/StandardButton";
import StandardLink from "../components_library/links/StandardLink";
import OneThirdHeightPane from "../components_library/panes/OneThirdHeightPane";
import CoverFittingImage from "../components_library/images/CoverFittingImage";
import CenteringPane from "../components_library/panes/CenteringPane";
import MarginTopPane from "../components_library/panes/MarginTopPane";
import SeparatorPane from "../components_library/panes/SeparatorPane";

/**
 * This Screen shows a list of articles. It's supposed to use the service ArticleService
 * to retrieve them from the backend.
 *
 * @param {string} topic The topic of articles to show. Like "Testimonials", "Leadership",
 * "Success stories", etc.
 */
class ListOfArticlesScreen extends Component {

    static contextType = AppContext;

    constructor() {
        super();

        this.state = { articles: [], more: undefined }

    }

    static propTypes = {
        topic: PropTypes.string
    };

    /**
     * Fetching articles when the component mounts
     */
    componentDidMount() {

        this.get_articles_from_article_service();

    }

    /**
     * When the topic changes, the props to this component change as well
     * We need to fetch the articles related to the new topic
     *
     * @param {object} prevProps Props as they were before the update
     */
    componentDidUpdate(prevProps) {

        if (prevProps.topic !== this.props.topic) {

            this.get_articles_from_article_service();

        }

    }

    /**
     * Fetching more articles when the user clicks on "MORE"
     */
    handleLoadMoreButtonClick = () => {

        this.get_articles_from_article_service();
    };

    /**
     * Function that calls the article service to fetch more articles or just the first time
     * to fetch the first page
     *
     * response.more is a flag that tells if there are more articles to fetch.
     */
    get_articles_from_article_service() {

        this.context.context.ArticleService.get_articles({ topic: this.props.topic },
            (response) => {

                this.setState({ articles: response.articles, more: response.more });

            }
        )

    }

    render() {

        // We get articles in an array where each item contains one article
        // We produce another array where each item contains two articles
        // This makes it easier to use the component ColumnsPane to build the list.
        // That component shows two articles at a time (a leftComponent and a
        // rightComponent)

        const articles_pairs = this.state.articles.reduce((articles_pairs, article, index, articles) => {

            if (index % 2 === 0)
                articles_pairs.push(articles.slice(index, index + 2));

            return articles_pairs;

        }, []);

        const screenWidth = window.innerWidth;

        const itIsASmallScreen = (screenWidth < APP_CONFIGURATION.responsiveBreakpoints.large);

        const jsx_for_list_of_articles = articles_pairs.map((pair_of_articles, index) => {

            return (

                <WideContentPane>

                    <ColumnsPane leftComponent={(

                        <StandardLink to={"/article/" + pair_of_articles[0].nid + "/" + titleToSlug(pair_of_articles[0].title)}>
                            <OneThirdHeightPane>
                                <CoverFittingImage src={APP_CONFIGURATION.backendUrl + pair_of_articles[0].field_image}
                                                   alt={pair_of_articles[0].title}
                                                   backgroundColor={(index % 2 === 0) || itIsASmallScreen ?
                                                       APP_CONFIGURATION.defaultColorsTable["DARKGREY"] :
                                                       APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]} />
                            </OneThirdHeightPane>
                            <CentredTextBox backgroundColor={ (index % 2 === 0) || itIsASmallScreen ?
                                APP_CONFIGURATION.defaultColorsTable["DARKGREY"] :
                                APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]} size="short">

                                <HeadlineText>{pair_of_articles[0].title}</HeadlineText>
                            </CentredTextBox>
                        </StandardLink>

                    )} rightComponent={pair_of_articles.length === 2 ? (

                        <StandardLink to={"/article/" + pair_of_articles[1].nid + "/" + titleToSlug(pair_of_articles[1].title)}>
                            <OneThirdHeightPane>
                                <CoverFittingImage src={APP_CONFIGURATION.backendUrl + pair_of_articles[1].field_image}
                                                   alt={pair_of_articles[1].title}
                                                   backgroundColor={(index % 2 === 0) || itIsASmallScreen ?
                                                       APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"] :
                                                       APP_CONFIGURATION.defaultColorsTable["DARKGREY"] } />
                            </OneThirdHeightPane>
                            <CentredTextBox backgroundColor={ (index % 2 === 0) || itIsASmallScreen ?
                                APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"] :
                                APP_CONFIGURATION.defaultColorsTable["DARKGREY"]} size="short">
                                <HeadlineText>{pair_of_articles[1].title}</HeadlineText>
                            </CentredTextBox>
                        </StandardLink>

                    ) : null}>
                    </ColumnsPane>

                </WideContentPane>

            )

        });

        let more_button;

        // Only if there are more articles to fetch we show the MORE button

        if (this.state.more) {

            more_button = (

                <CenteringPane>
                    <MarginTopPane size="tall">
                        <StandardButton onclick={this.handleLoadMoreButtonClick.bind(this)}>
                            MORE
                        </StandardButton>
                    </MarginTopPane>
                    <SeparatorPane size="short" />
                </CenteringPane>

            );

        }

        return [ jsx_for_list_of_articles, more_button ];

    }

}

export default ListOfArticlesScreen;
