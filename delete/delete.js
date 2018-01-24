'use strict';

const Zendesk = require('zendesk-node-api');

const zendesk = new Zendesk({
    url: YOUR_ZENDESK_URL, // https://example.zendesk.com
    email: YOUR_ZENDESK_EMAIL, // me@example.com
    token: YOUR_ZENDESK_API_TOKEN // hfkUny3vgHCcV3UfuqMFZWDrLKms4z3W2f6ftjPT
});


module.exports.delete = (event, context, callback) => {
    zendesk.objects.delete(OBJECT_ID).then(function(result){
        if(result == true ){
            const response = {
                statusCode: 200,
                body: JSON.stringify({
                  message: 'Zendesk Deleted !',
                  input: event
                }),
              };
              callback(null, response);
        }
    });
 

};