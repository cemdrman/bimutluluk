const successCode = 0;
const successMessage = 'Success';

const errorCode = -1;
const errorCMessage = 'Error';
/**
 * Success Reponse.
 * @param {number} status  - Success response status code
 * @param {string} message - Success response message
 * @param {any} records    - Success response data
 */
let success = (records) => {
    return {
        code: successCode,
        msg: successMessage,
        records
    }
}

/**
 * Error Reponse.
 * @param {number} status  - Error response status code
 * @param {string} message - Error response message
 */
let error = () => {
    return {
        code: errorCode,
        msg: errorCMessage
    }
}

module.exports = {
    success,
    error
};