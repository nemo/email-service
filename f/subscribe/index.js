var Mailchimp = require('mailchimp-api-v3')
var util = require('util');
var _  = require('lodash');

/**
* Your function call
* @param {Object} params Execution parameters
*   Members
*   - {Array} args Arguments passed to function
*   - {Object} kwargs Keyword arguments (key-value pairs) passed to function
*   - {String} remoteAddress The IPv4 or IPv6 address of the caller
*
* @param {Function} callback Execute this to end the function call
*   Arguments
*   - {Error} error The error to show if function fails
*   - {Any} returnValue JSON serializable (or Buffer) return value
*/
module.exports = (params, callback) => {
    var mailchimp = new Mailchimp(process.env.MAILCHIMP_KEY);

    var params = _.assign({
        id: process.env.MAILCHIMP_LIST_ID,
        email_address: params.kwargs.email_address,
        status: params.kwargs.status || 'subscribed',
        merge_fields: _.assign({
            FNAME: params.kwargs.first_name,
            LNAME: params.kwargs.last_name
        }, params.kwargs.merge_fields)
    }, params.kwargs);

    var listPath = util.format("/lists/%s/members", process.env.MAILCHIMP_LIST_ID);
    mailchimp.request({
        method: 'post',
        path: listPath,
        body: params
    })
    .then((data) => callback(null, data))
    .catch((err) => callback(err));
};
