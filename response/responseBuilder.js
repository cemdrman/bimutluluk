const successCode = 0;
const successMessage = "Success";
/**
 * Success Reposnse.
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

module.exports = {
    success
};