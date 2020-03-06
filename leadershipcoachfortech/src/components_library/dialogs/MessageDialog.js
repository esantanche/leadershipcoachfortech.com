import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {APP_CONFIGURATION} from "../../appConfiguration";

import ContentPane from "../panes/ContentPane";
import MessagePane from "../panes/MessagePane";
import HeadlineText from "../texts/HeadlineText";
import SeparatorPane from "../panes/SeparatorPane";
import CenteringPane from "../panes/CenteringPane";
import StandardButton from "../buttons/StandardButton";
import StandardIcon from "../icons/StandardIcon";

// TODO MessageDialog seems to be more of a screen than a component in the library
// It's because there is no style. I may call it MessageScreen

/**
 * FIXME doc
 *
 * Message dialog to notify successful completion of operations.
 * Used as well for errors.
 *
 * On error it shows an error icon as well.
 *
 * Props
 * @param {boolean} open True is the dialog should be visible
 * @param {boolean} it_is_an_error_message True if the dialog contains an error message
 * @param {string} title Dialog title
 * @param {string} message Message to display
 * @param {function} onclick Function to call when the user click on OK
 */
class MessageDialog extends Component {

    static propTypes = {
        open: PropTypes.bool,
        it_is_an_error_message: PropTypes.bool,
        title: PropTypes.string,
        message: PropTypes.string,
        onclick: PropTypes.func,
    };

    render() {

        const { open, it_is_an_error_message, title, message, onclick } = this.props;

        return (

            <MessagePane visible={open}>
                <ContentPane color={APP_CONFIGURATION.defaultColorsTable["DARKERWHITESHADE"]}>

                    {(it_is_an_error_message ? (
                        <React.Fragment>
                            <SeparatorPane />
                            <CenteringPane>
                                <StandardIcon>
                                    error_outline
                                </StandardIcon>
                            </CenteringPane>
                        </React.Fragment> ) : null )}
                    <SeparatorPane />
                    <HeadlineText color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}>
                        {title}
                    </HeadlineText>
                    <HeadlineText color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}>
                        {message}
                    </HeadlineText>
                    <SeparatorPane />
                    <CenteringPane>
                        <StandardButton onclick={onclick}>OK</StandardButton>
                    </CenteringPane>
                    <SeparatorPane />
                </ContentPane>
            </MessagePane>

        )

    }

}

export default MessageDialog;


