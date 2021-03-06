/**
 * Validation rules for forms
 */

import isEmail from 'validator/lib/isEmail';

export default {
    type: {
        email: ({ value }) => isEmail(value),
    }
}
