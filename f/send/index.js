/* Import dependencies, declare constants */
var Mandrill = require('mandrill-api/mandrill').Mandrill;

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
    var client = new Mandrill(process.env.MANDRILL_KEY);
    var templateName = params.kwargs.template_name;
    var templateContent = params.kwargs.template_content;
    var message = params.kwargs.message;
    var ipPool = params.kwargs.ip_pool || "Main Pool";
    var sendAt = params.kwargs.send_at;

    var sendFunction = templateName && templateName.length ? client.messages.sendTemplate.bind(client.messages) : client.messages.send.bind(client.messages);
    var params = {
        message: message,
        async: false,
        ip_pool: ipPool
    };

    if (sendAt && sendAt.length)
        params.send_at = sendAt;

    if (templateContent)
        params.template_content = templateContent;

    if (templateName)
        params.template_name = templateName;

    debugger
    sendFunction(params,
        (result) => callback(null, result),
        (err) => callback(err)
    );
};
