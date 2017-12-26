/**
 * Repository to access the Challenge API Endpoint
 * @constructor
 */
function ChallengeRepository() {
    ApiRepository.call(this, "challenges");
}

ChallengeRepository.prototype = Object.create(ApiRepository.prototype);
ChallengeRepository.constructor = ChallengeRepository;