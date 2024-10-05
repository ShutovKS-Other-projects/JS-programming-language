import PI, {E, GRAVITY, CONSTANTS} from './constants.js';

export {PI} from './constants.js';

function calculateCircleArea(radius) {
    return PI * radius * radius;
}

function naturalLog(x) {
    return Math.log(x) / Math.log(E);
}

function calculateGravityForce(mass) {
    return mass * GRAVITY;
}

function calculateEnergy(mass) {
    return mass * CONSTANTS.LIGHT_SPEED ** 2;
}

function calculatePhotonEnergy(frequency) {
    return CONSTANTS.PLANCK * frequency;
}

function calculateCircumference(radius) {
    return 2 * PI * radius;
}

export default calculateCircleArea;

export {naturalLog, calculateGravityForce, calculateEnergy, calculatePhotonEnergy, calculateCircumference};
