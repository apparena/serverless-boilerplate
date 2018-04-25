'use strict';

module.exports = () =
>
{
  const AWS = require('aws-sdk');

  return new AWS.SNS({ region: process.env.SERVERLESS_REGION });
}
;
