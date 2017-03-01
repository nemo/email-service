# Abstracted Email-service
[![stdlib.com service](https://img.shields.io/badge/stdlib-0.1.5-green.svg?raw=true "stdlib.com service")](https://stdlib.com/services/nemo/email-service)

This is an email service built on top of [Mailchimp/Mandrill](https://mailchimp.com) to enable serverless landing pages.

You can see an example [here](https://nemo.github.io/email-service/).

It's built on top of [stdlib](https://stdlib.com) – a microservice provider.

## Functions
### /email-service/subscribe
[function spec](https://github.com/nemo/email-service/blob/master/f/subscribe/function.json) | [source](https://github.com/nemo/email-service/blob/master/f/subscribe/index.js)

This function will subscribe a user to the given Mailchimp list id. You have to have the following environment variables set:

 - `MAILCHIMP_KEY` – API Key for Mailchimp.
 - `MAILCHIMP_LIST_ID` – List ID from Mailchimp.


### /email-service/subscribe
[function spec](https://github.com/nemo/email-service/blob/master/f/subscribe/function.json) | [source](https://github.com/nemo/email-service/blob/master/f/subscribe/index.js)

This function will send an email either using a template or just a plain email from the html/text given to the given user. You have to set the following environment variable on the service:

 - `MANDRILL_KEY` – API Key for Mandrill.


Here's an example message send. See the docs for [sendTemplate](https://mandrillapp.com/api/docs/messages.nodejs.html#method=send-template) and [send](https://mandrillapp.com/api/docs/messages.nodejs.html#method=send) for the full params.
```javascript
  const lib = require('lib');

  lib['./send']({
      message: {
          to: [{
              email: "nima@halfmoon.ws",
              name: "Nima Gardideh",
              type: "to"
          }],
          headers: {
              "Reply-To": "nima@discoverforward.com"
          },
          subject: "This is a test email!",
          from_email: "nima@discoverforward.com",
          from_name: "Nima",
          html: "<p>This is an email sent from a stdlib email service.</p>",
          text: "This is an email sent from a stdlib email-service."
      }
  }, console.error)

```
