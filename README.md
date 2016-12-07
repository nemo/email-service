# Abstracted Email-service
[![stdlib.com service](https://img.shields.io/badge/stdlib-0.1.1-green.svg?raw=true "stdlib.com service")](https://stdlib.com/services/nemo/email-service)

This is an email service built on top of [Mailchimp/Mandrill](https://mailchimp.com) to enable serverless landing pages.

You can see an example [here](https://nemo.github.io/email-service).

It's built on top of [stdlib](https://stdlib.com) – a microservice provider.

## Functions
### /email-service/subscribe
[function spec](https://github.com/nemo/email-service/blob/master/f/subscribe/function.json) | [source](https://github.com/nemo/email-service/blob/master/f/subscribe/index.js)

This function will subscribe a user to the given Mailchimp list id. You have to have the following environment variables set:

 - `MAILCHIMP_KEY` – API Key for Mailchimp.
 - `MAILCHIMP_LIST_ID` – List ID from Mailchimp.
