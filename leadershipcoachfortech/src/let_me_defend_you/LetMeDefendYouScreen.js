import React, { Component } from 'react';

import AppContext from '../Context';

// Using this:
// https://github.com/kettanaito/react-advanced-form
// Demo: https://codesandbox.io/s/53wlvmp42l?module=%2Fsrc%2FSyncValidation.js

import { FormProvider } from 'react-advanced-form';
import rules from './validation-rules';
import messages from './validation-messages';

import { Form } from 'react-advanced-form';
import { Input, Textarea } from 'react-advanced-form-addons';

import SeparatorPane from "../components_library/panes/SeparatorPane";

import LabelText from "../components_library/texts/LabelText";
import StandardButton from "../components_library/buttons/StandardButton";

/**
 * This is the Let me defend you form used to send messages. Messages will be sent to the backend
 * to be stored. Their creation will be notified.
 */
class LetMeDefendYouScreen extends Component {

    static contextType = AppContext;

    /**
     * This function send the message to the backend.
     *
     * The parameter serialized contains the fields (name, email and message)
     *
     * This function will be called only if the form is valid
     *
     * @param {object} It's an object the form provides thanks to React Advanced Form
     * (https://github.com/kettanaito/react-advanced-form)
     */
    submit_message({ serialized, fields, form }) {

        // this.context.updateContext is a function defined in src/App.js

        return this.context.context.LetMeDefendYouMessageService.create_let_me_defend_you_message(serialized,
            (error) => {

                if (error) {

                    this.context.updateContext({ open: true,
                        title: "Something went wrong",
                        message: "Please, save your message, reload the page and try again.",
                        it_is_an_error_message: true });

                } else {

                    this.context.updateContext({ open: true,
                        title: "Message sent",
                        message: "Thank you for your message!" });

                    // Resetting the form
                    form.reset();
                }

        });

    }

    render() {

        // In Input fields fonts cannot be changed but by creating custom fields. Not doing it for now
        // Textarea doesn't use default fonts. I can change the font by wrapping the field in a div

        // Input fields use Roboto font by default

        return (

            <div>

                <FormProvider rules={rules} messages={messages}>
                    <Form action={this.submit_message.bind(this)}>
                    
                        <LabelText>Name</LabelText>
                        <Input name="Name" type="text" required />

                        <LabelText>Email</LabelText>
                        <Input name="Email" type="email" required />

                        <LabelText>Message</LabelText>
                        <div style={{ fontFamily: "Roboto, sans-serif" }}>
                            <Textarea name="Message" label="Message" rows={5} cols={30} required />
                        </div>

                        <SeparatorPane/>

                        <StandardButton>Go!</StandardButton>

                    </Form>
                </FormProvider>

            </div>

        )

    }

}

export default LetMeDefendYouScreen;
