// App configuration
import { APP_CONFIGURATION } from '../appConfiguration';

import error_message_from_error from "../helpers/errorMessages";
import * as Sentry from '@sentry/browser';

// Helper function to calculate the number of the next page to fetch
// The first page is page zero
import { number_of_page_to_fetch } from '../helpers/cache_computations';

// Example of article:
// body: "<p>Streaming classical music! I love classical music!</p>\n\n<p>As of this writing, the website, <a href=\"http://iclassix.tv\">http://iclassix.tv</a>, is still work in progress.</p>\n\n<p>Powerful Aida, moving Nabucco, funny Barber of Seville, romantic La Traviata, it’s all there just a click away.</p>\n\n<p>Sure, it’s way better to go to the <a href=\"http://www.roh.org.uk/\">Royal Opera House</a> to see La Traviata, but not all of us can afford it.</p>\n\n<p>Modern technology makes it possible to watch opera from your home at affordable prices.</p>\n\n<p>The concerted action of AngularJS, CDN, Drupal, HTTP streaming, Nginx, Compass Sass, Suzy grid, Flowplayer and REST apis creates a harmonic symphony of software agents that will offer a quality and enjoyable visual experience.</p>\n\n<p>BTW, it’s all made in London and reaching the world. Power of internet.</p>"
// field_ems_topic: "Success stories"
// field_image: "/sites/default/files/2018-08/iclassix-tv-200x200.jpg"
// langcode: "English"
// nid: "78"
// sticky: "On"
// title: "iClassix"

/**
 * This service fetches articles from the backend.
 */
class ArticleService {

    constructor() {

        this.articles_cache = {};
        this.articles_count = {};

    }

    /**
     * Function getting articles.
     *
     * There are two implemented filters.
     *
     * The first one fetches a single article. It needs the node id the backend assigned to the article.
     *
     * The second fetches all articles for a given topic. Topics can be "Success stories", "Testimonials", etc.
     *
     * @param {object} filters Filters to use when fetching articles
     * @param {function} callback_to_return_articles_and_more_flag Function to call to return the fetched articles
     */
    get_articles(filters, callback_to_return_articles_and_more_flag) {

        let filter_query_string = "";

        if (filters) {

            if (filters.nid)
                filter_query_string += "&nid=" + filters.nid;

            if (filters.topic) {

                if (filters.topic === "Tech watch")
                    filter_query_string += "&field_ems_topic_target_id=Talking about my experiences";
                else
                    filter_query_string += "&field_ems_topic_target_id=" + filters.topic;

            }

        }

        this.fetch_articles(filter_query_string, (articles_fetched_successfully) => {

            if (articles_fetched_successfully) {

                // I need to know if there are more articles to fetch so that I can return
                // this piece of information and the caller can show the LOAD MORE button

                const count_of_articles_in_cache = this.count_of_articles_in_cache_for_query(filter_query_string);

                const count_of_articles = this.count_of_articles_for_query(filter_query_string);

                const there_are_more_articles_to_fetch = (count_of_articles > count_of_articles_in_cache);

                const result_to_return = {

                    more: there_are_more_articles_to_fetch,

                    articles: this.articles_cache[filter_query_string]

                };

                callback_to_return_articles_and_more_flag(result_to_return);

            }

        })

    };

    /**
     * Doing the actual fetch. This function will add to the cache an additional page of results or it will do nothing
     * if all articles have already been fetched.
     * If there is nothing in cache, it will fetch page zero.
     * This function returns just true on success and false on failure. The caller will find the articles in cache.
     *
     * @param {string} filter_query_string String with query parameters that will filter the result
     * @param {function} callback Function to call to return true if everything went well, false otherwise.
     */
    fetch_articles(filter_query_string, callback) {

        let page_number;

        // There is a separated cache for each query string
        const count_of_articles_in_cache = this.count_of_articles_in_cache_for_query(filter_query_string);
        const count_of_articles = this.count_of_articles_for_query(filter_query_string);

        // We need to fetch another page only if we didn't yet fetch all available articles for the
        // given query.
        // If the cache is empty certainly we need to fetch the first page
        if (count_of_articles > count_of_articles_in_cache || count_of_articles_in_cache === 0) {

            if (count_of_articles === -1)
                page_number = 0;
            else
                page_number = number_of_page_to_fetch(count_of_articles_in_cache, count_of_articles, APP_CONFIGURATION.fetchPageSize);

            fetch(APP_CONFIGURATION.backendUrl + "/rest/EMS/view/articles?_format=json&langcode=en" +
                filter_query_string + "&page=" + page_number, {
                method: 'GET',
            })
                .then((response) => {
                    if (!response.ok) { throw response }
                    return response.json()
                })
                .then((response) => {

                    this.add_results_to_cache(filter_query_string, response.results);

                    this.update_count_of_articles_for_query(filter_query_string, parseInt(response.count, 10));

                    callback(true);
                })
                .catch((error) => {

                    const error_message = error_message_from_error(error);

                    Sentry.captureMessage(error_message);

                    callback(false);
                });


        } else {

            // Everything is already in cache. The caller has just to read it.

            callback(true);

        }

    };

    /**
     * Returning the number of articles we already have in cache for the given
     * query string.
     *
     * @param {string} filter_query_string Query string (there is a separate cache for each query)
     * @returns {number} Number of articles in cache for the given query string
     */
    count_of_articles_in_cache_for_query(filter_query_string) {

        // Testing filter_query_string for empty
        // See https://repl.it/@EmanueleSantanc/Check-for-empty-parameter

        if (!filter_query_string) {

            Sentry.captureMessage("count_of_articles_in_cache_for_query, filter_query_string not defined");

            return -1;
        }

        // If the cache for the given query string is not even defined,
        // we define it and set it as empty
        if (typeof this.articles_cache[filter_query_string] === "undefined") {

            this.articles_cache[filter_query_string] = [];

        }

        return this.articles_cache[filter_query_string].length;

    };

    /**
     * Returning the total number of articles that are available for the given
     * query string.
     * We don't get the number here. We got it previously and stored it in an array.
     * Now just returning the stored value.
     *
     * @param {string} filter_query_string Query string
     * @returns {number} Total number of articles that are available for the given
     * query string.
     */
    count_of_articles_for_query(filter_query_string) {

        if (!filter_query_string) {

            Sentry.captureMessage("count_of_articles_for_query, filter_query_string not defined");

            return -1;
        }

        // If the total number of articles available for a given query has never been
        // determined, we define it and set it to -1
        if (typeof this.articles_count[filter_query_string] === "undefined") {

            this.articles_count[filter_query_string] = -1;

        }

        return this.articles_count[filter_query_string];

    };

    /**
     * We call this function to update the total number of articles available for a given query.
     * We typically do this after we make an actual query.
     *
     * @param {string} filter_query_string Query string
     * @param {number} count_of_articles Total number of articles that are available for the given
     * query string.
     */
    update_count_of_articles_for_query(filter_query_string, count_of_articles) {

        if (!filter_query_string) {

            Sentry.captureMessage("update_count_of_articles_for_query, filter_query_string not defined");

            return;
        }

        this.articles_count[filter_query_string] = count_of_articles;

    };

    /**
     * Adding articles to the cache of articles for the given query string
     *
     * @param {string} filter_query_string Query string
     * @param {array} results Array of additional results to append to the cache
     */
    add_results_to_cache(filter_query_string, results) {

        if (typeof this.articles_cache[filter_query_string] === "undefined") {

            this.articles_cache[filter_query_string] = [];

        }

        // Append array to array
        // See https://repl.it/@EmanueleSantanc/Append-array-to-an-array

        this.articles_cache[filter_query_string].push(...results);

    }

}

export default ArticleService;