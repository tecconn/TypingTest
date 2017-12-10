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

ApiRepository.prototype.getUrl = function() {
    return this.endpointUrl
};

ApiRepository.prototype.getOne = function(id) {
    return $.ajax({
        url: this.getUrl() + id,
        type: "GET"
    });
};

ApiRepository.prototype.getAll = function() {
  return $.ajax({
      url: this.getUrl(),
      type: "GET"
  });
};

ApiRepository.prototype.save = function(obj) {
    return $.ajax({
        url: this.getUrl(),
        data: JSON.stringify(obj),
        type: "POST"
    });
};

ApiRepository.prototype.update = function(obj) {
    return $.ajax({
        url: this.getUrl(),
        data: JSON.stringify(obj),
        type: "PUT"
    });
};

ApiRepository.prototype.remove = function(obj) {
    return $.ajax({
        url: this.getUrl(),
        data: JSON.stringify(obj),
        type: "DELETE"
    });
};