/**
 * Repository to access the Game API Endpoint
 * @constructor
 */
function GameRepository() {
    ApiRepository.call(this, "games");
}

GameRepository.prototype = Object.create(ApiRepository.prototype);
GameRepository.constructor = GameRepository;