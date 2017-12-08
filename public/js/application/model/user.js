/**
 * Represents a User
 *
 * @param username {string=} Username
 * @param firstName {string=} FirstName of the user
 * @param lastName {string=} LastName of the user
 * @param password {string=} Password of the user
 * @constructor
 */
function User(username, firstName, lastName, password) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
}