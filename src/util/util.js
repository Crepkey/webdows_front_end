/**
 * @param {string} baseURL      The baseURL is the hyperlink without any additional data.
 *                              It is important that you need to leave the slash ("/") character from the end of URL.
 * @param {object} queryParams  This object contains all of the query parameters.
 *
 * @return {string}             This function returns a string which was builed up from the arguments
 */
export function createURL(baseURL, queryParams) {
  let basicURL = baseURL + "?";
  for (let key in queryParams) {
    basicURL += key + "=" + queryParams[key] + "&";
  }
  basicURL = basicURL.substring(
    0,
    basicURL.length - 1 /* Removing the last unnecessary "&" character */
  );
  return basicURL;
}
