/**
 * This helper function calculates the number of the next page to fetch.
 * If we have 30 articles to fetch and we already have 12 articles in cache,
 * we need to fetch page 2. We already fetched two pages, page 0 and page 1.
 * In this example a page is 6 articles.
 *
 * @param {number} count_of_articles_in_cache How many articles there already are in cache
 * @param {number} count_of_articles Total number of articles available to fetch (for a given query)
 * @param {number} page_size Number of article in a page
 * @returns {number} Number of the next page to fetch with zero being the first page
 */
export function number_of_page_to_fetch(count_of_articles_in_cache, count_of_articles, page_size) {

    if (typeof count_of_articles_in_cache !== "number" || typeof count_of_articles !== "number" || typeof page_size !== "number" || page_size === 0) {

        console.error("number_of_page_to_fetch, error in parameters");

        return -1;
    }

    if (count_of_articles_in_cache >= count_of_articles) {

        // All the articles have already been fetched
        // What am I doing here?

        return -1;
    }

    const number_of_full_pages_in_cache = Math.floor(count_of_articles_in_cache / page_size);

    // Remember that the first page is page 0

    if ((number_of_full_pages_in_cache * page_size) < count_of_articles) {

        // There are more articles to fetch

        // number_of_full_pages_in_cache is also the number of the next page to fetch
        return number_of_full_pages_in_cache;

    } else {

        // No more pages to fetch

        return -1;
    }
}