import React, { Component } from 'react';
import HomeScreen from "./home/HomeScreen";
import { BrowserRouter, Route } from 'react-router-dom';
import TopicScreen from "./topic/TopicScreen";
import ArticleScreen from './article/ArticleScreen';
import HeaderScreen from "./header/HeaderScreen";
import LetMeDefendYouContainerScreen from "./let_me_defend_you/LetMeDefendYouContainerScreen";
import FooterScreen from "./footer/FooterScreen";
import MessageDialog from "./components_library/dialogs/MessageDialog";
import ErrorBoundary from "./ErrorBoundary";
import CookieConsent from "react-cookie-consent";

import LetMeDefendYouMessageService from "./services/LetMeDefendYouMessageService";
import ArticleService from "./services/ArticleService";

import AppContext from './Context';

const AppLetMeDefendYouMessageService = new LetMeDefendYouMessageService();
const AppArticleService = new ArticleService();

class App extends Component {

    constructor(props) {
        super(props);

        // Note that a React Context is defined in src/Context.js
        // The context's value is the state of this component, App.
        // Every time the state changes, so does the context

        this.state = { context: {
                                    MessageDialogState: { },
                                    ArticleService: AppArticleService,
                                    LetMeDefendYouMessageService: AppLetMeDefendYouMessageService
                                },
                       updateContext: this.updateContext.bind(this) };
    }

    /**
     * Child components will call this function to update the state. The changes will be propagated to
     * all children thanks to the AppContext.Provider component.
     *
     * @param {object} messageDialogStateDetails Object with details to use to update the state
     */
    updateContext(messageDialogStateDetails) {

        this.setState({ context: { MessageDialogState: { open: messageDialogStateDetails.open,
                                                                title: messageDialogStateDetails.title,
                                                                message: messageDialogStateDetails.message,
                                                                it_is_an_error_message: messageDialogStateDetails.it_is_an_error_message },
                ArticleService: this.state.context.ArticleService,
                LetMeDefendYouMessageService:  this.state.context.LetMeDefendYouMessageService
            },
        })

    }

    /**
     * Closing the message dialog when its close button is clicked.
     */
    onMessageDialogCloseButtonClick() {

        this.setState({ context: { MessageDialogState: { open: false },
                ArticleService: this.state.context.ArticleService,
                LetMeDefendYouMessageService:  this.state.context.LetMeDefendYouMessageService
            }
        });
    }

    render() {

        return (

            <ErrorBoundary>
                <AppContext.Provider value={this.state}>
                    <BrowserRouter>
                        <MessageDialog open={this.state.context.MessageDialogState.open}
                                       title={this.state.context.MessageDialogState.title}
                                       message={this.state.context.MessageDialogState.message}
                                       it_is_an_error_message={this.state.context.MessageDialogState.it_is_an_error_message}
                                       onclick={this.onMessageDialogCloseButtonClick.bind(this)}/>
                        <HeaderScreen />
                        <Route exact path="/" component={HomeScreen} />
                        <Route path="/articles/:topic" component={TopicScreen} />
                        <Route path="/article/:articlenid" component={ArticleScreen} />
                        <Route path="/let-me-defend-you" component={LetMeDefendYouContainerScreen} />
                        <FooterScreen />
                        <CookieConsent buttonStyle={{ fontFamily: "Lato, sans-serif" }}>
                            <span style={{ fontFamily: "Lato, sans-serif" }}>This website uses cookies to enhance the user experience.</span>
                        </CookieConsent>
                    </BrowserRouter>
                </AppContext.Provider>
            </ErrorBoundary>
        );
    }
}

export default App;
