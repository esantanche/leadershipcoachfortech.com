import React, { Component } from 'react';
import { APP_CONFIGURATION } from '../appConfiguration';
import ListOfArticlesScreen from '../list_of_articles/ListOfArticlesScreen';
import HeadlineText from "../components_library/texts/HeadlineText";
import WideContentPane from "../components_library/panes/WideContentPane";

/**
 * This screen shows a list of articles for a given topic.
 *
 * When this screen is mounted, the url is like this:
 * "/articles/:topic"
 *
 * Props will provide the parameter 'topic' in this variable: this.props.match.params.topic
 * It's the part of the URL that represents the topic (success-stories, testimonials, talking-about-my-experiences, etc.)
 * The look up table APP_CONFIGURATION.topicURL2topicLookupTable tells us what to show as title of the
 * list of articles ("Success stories", "Testimonials", "Leadership"...)
 */
class TopicScreen extends Component {

    constructor(props) {
        super(props);

        this.state = { topic_details: {} };
    }

    // To refresh the component when the window resizes
    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    componentDidMount() {

        document.title = `Leadership Coach for Tech, ${APP_CONFIGURATION.topicURL2topicLookupTable[this.props.match.params.topic]}`;

        window.addEventListener('resize', this.updateDimensions);

    }

    componentWillUnmount() {

        window.removeEventListener('resize', this.updateDimensions);

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.match.params.topic !== this.props.match.params.topic) {

            document.title = `Leadership Coach for Tech, ${APP_CONFIGURATION.topicURL2topicLookupTable[this.props.match.params.topic]}`;

        }

    }

    render() {

        return (

           <React.Fragment>

                <WideContentPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["DARKERWHITESHADE"]}>

                    <HeadlineText color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}
                                  large={true}>

                        <span>{APP_CONFIGURATION.topicURL2topicLookupTable[this.props.match.params.topic]}</span>

                    </HeadlineText>

                </WideContentPane>

                <ListOfArticlesScreen topic={APP_CONFIGURATION.topicURL2topicLookupTable[this.props.match.params.topic]} />

           </React.Fragment>

        )

    }

}

export default TopicScreen;
