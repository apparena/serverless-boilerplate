# App-Arena Serverless Boilerplate

Heavily inspired by [Nordcloud Serverless boilerplate](https://github.com/nordcloud/serverless-boilerplate).

The App-Arena serverless-boilerplate is a project template for new serverless services. Contents of the template:
* AWS **VPC configuration**
* file `lib/redis.js`: Prepared **Elasticache Redis** connection
* file `lib/mysql.js`: Prepared **RDS Mysql** connection
* file `lib/sns.js`: Prepared **SNS connection** to publish Messages on SNS topics (See [Publishing on SNS](Publishing on SNS) )
* file `serverless.yml.json`: Register plugins above
* file `webpack.config.js`: Settings for webpack-plugin
* file `templates/function.ejs`: Template to use for new functions
* plugin [serverless-mocha-plugin](https://github.com/SC5/serverless-mocha-plugin): enable test driven development using mocha, creation of functions from command line
* plugin [serverless-offline](https://github.com/dherault/serverless-offline): run your services offline for e.g. testing
* plugin [serverless-webpack](https://github.com/elastic-coders/serverless-webpack): optimize pacakge size with **Webpack 4**
* plugin [serverless-kms-secrets](https://github.com/SC5/serverless-kms-secrets): ease handling of KMS encrypted secrets
* plugin [serverless-plugin-custom-roles](https://www.npmjs.com/package/serverless-plugin-custom-roles): enable setting roles on a per function basis
* plugin [serverless-plugin-split-stacks](https://github.com/dougmoscrop/serverless-plugin-split-stacks): Split Cloudformation stack to multiple stacks to overcome the 200 resource limit

## Getting started

With Serverless Framework v1.5 and later, a new project based on the
project template is initialized with the command
```
> sls install -u https://github.com/apparena/serverless-boilerplate -n myservicename
> cd myservicename
> yarn
```
### Create a new function

Create a new function including tests and two HTTP endpoints (they are
optional. Remove the `--hhtpEvent` if you don't want them...

`sls create function -f myFunctionName --handler
functions/myFunctionName/index.handler --httpEvent "post myResource"
--httpEvent "get myResource"`

### Deploy your function

Deploy your function to your AWS account.

` sls deploy --stage dev`

### Display logs

Open a new terminal and enter this command to see incoming logs for
`myFunctionName` in `dev` environment.

`sls logs -f myFunctionName --stage dev --startTime 10m -t`

### Call your function

You can either **send a request to your HTTP-Endpoint** (will be
displayed after successful deployment) **or you call your function via
console**.

`SLS_DEBUG=* sls invoke --stage dev -f myFunctionName -p
functions/myFunctionName/mockData.json`

Remove the `-p functions/myFunctionName/mockData.json` parameter if you
do not want to send a mock event to your function.

See https://docs.aws.amazon.com/lambda/latest/dg/eventsources.html for
sample events.

## Debugging locally

Please change the `debug` and `debug:invoke` script in `package.json` **if you
are not using Windows or installed Serverless using Yarn**. You need to
adapt the Path to your serverless command.

**Debugging HTTP requests:**

1. `yarn debug` will start a debug server
2. Open `about://inspect` in Chrome browser
3. Click on `Open dedicated DevTools for Node`
4. Start debugging in Chrome Dev Tools

**Debugging local function invokations:**

We already prepared several AWS example event payloads in `/test/events/*` you can use as template for your
functions payload. As well you will find an example debug script in the package.json file
E.g. `yarn debug:myFunction --stage production`

1. `yarn debug:invoke -f myfunctionname -p
   functions/myfunctionname/mockdata.json` will debug `myfunctionname`by
   sending the mockdata.json file to the function.
2. Open `about://inspect` in Chrome browser
3. Click on `Open dedicated DevTools for Node`
4. Start debugging in Chrome Dev Tools

### View logs

Checkout the example script in your package.json file: `yarn logs:myFunction --stage production`

## Environments

`dev`, `stage`, `prod`: You can configure each of them by changing the
configuration in `config/{STAGE}.yml`.

## Testing vulnerabilities

Test vulnerabilities with NSP using
```
> npm run nsp
```

## Comparing setup with boilerplate

You can compare your project setup (dependencies, devdependencies, scripts) with the boilerplate using the command

```
> npm run compare-boilerplate
```

The script reports only for items that are in the boilerplate and differ
 from your current project.

## Publishing on SNS

If you deploy your function into a VPC you cannot publish SNS messages, as the service runs outside of the VPC.
To enable your functions to publish from within the VPC to SNS you need to
[setup a PrivateLink](https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/endpoint-service.html) for your VPC and use a SecurityGroup with Port 443 open.

## TODO

Please see project GitHub
[issue tracker](https://github.com/apparena/serverless-boilerplate/issues)
or send us a pull request.

## Release History

* 2018/04/25 - v1.1.0 - Added configuration.

## License

Copyright (c) 2018 [App-Arena](https://www.app-arena.com/), licensed for users and contributors under MIT license.
https://github.com/apparena/serverless-boilerplate/blob/master/LICENSE-MIT
