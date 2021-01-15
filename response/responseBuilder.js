

/**
    * Success Reposnse.
    * @param {number} status  - Success response status code
    * @param {string} message - Success response message
    * @param {any} records    - Success response data
*/
let success = (code, message, records) => {
    return {
        code,
        message,
        records
    }
}

module.exports = {success};