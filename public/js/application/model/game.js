/**
 * Represents a Game object
 *
 * @param id {number=}
 * @param username {string=}
 * @param start_time {Date=}
 * @param end_time {Date=}
 * @param answer {string=}
 * @param challenge_id {number=}
 * @param challenge {Challenge=}
 * @constructor
 */
function Game(id, username, start_time, end_time, answer, challenge_id, challenge) {
    this.id = id;
    this.username = username;
    this.start_time = start_time;
    this.end_time = end_time;
    this.answer = answer;
    this.challenge_id = challenge_id;
    this.challenge = challenge;
}