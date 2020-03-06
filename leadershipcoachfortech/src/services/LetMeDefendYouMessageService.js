import error_message_from_error from "../helpers/errorMessages";
import * as Sentry from '@sentry/browser';

import {APP_CONFIGURATION} from "../appConfiguration";

/**
 * Users can enter a message as well as their name and email.
 * This service sends this information to the server and the latter will let
 * me know that a user left a message.
 */
function LetMeDefendYouMessageService() {

    return {

        /**
         * This function sends the message to the server
         *
         * @param {object} message_details Message, name and email
         * @param {function} callback_to_return_error Function to call to communicate the result of the
         * operation, if it was successful or failed
         * @returns {Promise<any | never>} The promise the fetch instruction produces
         */
        create_let_me_defend_you_message: (message_details, callback_to_return_error) => {

            // The Drupal backend needs the content type of the node to create
            // It's lcft_let_me_defend_you_message.
            // This Drupal content type has three fields: name, email and message.
            // We have to provide a title that will show up only in Drupal
            // admin interface

            const message_node_details = {
                type: [{"target_id": "lcft_let_me_defend_you_message"}],
                title: [{"value": "New Message LCFT " + message_details.Name}],
                field_name: [{"value": message_details.Name}],
                field_email: [{"value": message_details.Email}],
                field_message: [{"value": message_details.Message}]
            };

            return fetch(APP_CONFIGURATION.backendUrl + '/node?_format=json', {
                method: 'POST',
                body: JSON.stringify(message_node_details),
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                }
            })
                .then((response) => {
                    if (!response.ok) {
                        throw response
                    }
                    return response.json()
                })
                .then(function (response_json) {

                    // No error here

                    callback_to_return_error(null);
                })
                .catch(function (error) {

                    const error_message = error_message_from_error(error);

                    Sentry.captureMessage(error_message);

                    callback_to_return_error(error);

                });

        },

    }

}

export default LetMeDefendYouMessageService;
