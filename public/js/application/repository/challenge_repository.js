/**
 * Repository to access the Challenge API Endpoint
 * @constructor
 */
function ChallengeRepository() {
    ApiRepository.call(this, "challenge");
}

ChallengeRepository.prototype = Object.create(ApiRepository.prototype);
ChallengeRepository.constructor = ChallengeRepository;