/**
 * General utilities for objects
 *
 * @constructor
 */
function ObjectUtility() {

}

/**
 * Casts an anonymous object to a specific type
 *
 * @param obj {object} Object to cast
 * @param constructor {function} Constructor of the object to cast to
 * @return {*}
 */
ObjectUtility.cast = function(obj, constructor) {
    var newObj = new constructor();
    if (obj) {
        for (var property in constructor) {
            if (constructor.hasOwnProperty(property) && obj.hasOwnProperty(property))
                newObj[property] = obj[property];
        }
    }
    return newObj;
};