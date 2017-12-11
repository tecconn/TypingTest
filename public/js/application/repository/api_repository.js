/**
 * API Repository template to be implemented ch child classes
 *
 * @param endpointUrl {string} Endpoint to connect to
 * @constructor
 */
function ApiRepository(endpointUrl) {
    if (!endpointUrl)
        throw new Error("EndpointUrl not defined!");
    this.endpointUrl = endpointUrl;
}

/**
 * Gets the Url of the API Endpoint
 *
 * @return {string|*} Url of the API Endpoint
 */
ApiRepository.prototype.getUrl = function() {
    return this.endpointUrl
};

/**
 * Gets a single object from the API Endpoint
 *
 * @param id {number} Unique identifier of the object
 * @return {*} AJAX Response
 */
ApiRepository.prototype.getOne = function(id) {
    return $.ajax({
        url: this.getUrl() + "/" + id,
        type: "GET"
    });
};

/**
 * Gets all the objected from the API Endpoint
 *
 * @return {*} All objects from the API Endpoint
 */
ApiRepository.prototype.getAll = function() {
  return $.ajax({
      url: this.getUrl(),
      type: "GET"
  });
};

/**
 * Saves the object in the API
 *
 * @param obj {object} Object to save
 * @return {*} AJAX Response
 */
ApiRepository.prototype.save = function(obj) {
    return $.ajax({
        url: this.getUrl(),
        data: JSON.stringify(obj),
        type: "POST"
    });
};

/**
 * Updates the values of the object in the API
 *
 * @param obj {object} Object to update
 * @return {*} AJAX Response
 */
ApiRepository.prototype.update = function(obj) {
    return $.ajax({
        url: this.getUrl(),
        data: JSON.stringify(obj),
        type: "PUT"
    });
};

/**
 * Deletes the object from the API
 *
 * @param obj {object} Object to delete
 * @return {*} AJAX Response
 */
ApiRepository.prototype.remove = function(obj) {
    return $.ajax({
        url: this.getUrl(),
        data: JSON.stringify(obj),
        type: "DELETE"
    });
};