/**
 * Configuration parameters for the entire application
 *
 * @see sitemap When the table topicURL2topicLookupTable changes, the sitemap may change
 * as well
 */

export const APP_CONFIGURATION = {
    defaultColorsTable: {
        "BLUE": "#4178BE",
        "WHITESHADE": "#F9F9FB",
        "DARKERWHITESHADE": "#ECF2F2",
        "LIGHTGREY": "#777677",
        "DARKGREY": "#264A60",
        "VERYDARKGREY": "#1D3649"
    },
    responsiveBreakpoints: {
        large: 960,
        medium: 600
    },
    // The base url of the backend
    backendUrl: 'https://backend.emanuelesantanche.com',
    // Number of articles in a page of results
    fetchPageSize: 6,
    topicURL2topicLookupTable: {
        "success-stories": "Success stories",
        "testimonials": "Testimonials",
        "tech-watch": "Tech watch",
        "leadership": "Leadership",
        "services": "Services"
    },
    fontFamily: "Lato, sans-serif",
    fontFamilyForFields: "Roboto, sans-serif",
};

// xs, extra-small: 0px or larger
// sm, small: 600px or larger
// md, medium: 960px or larger
// lg, large: 1280px or larger
// xl, extra-large: 1920px or larger
