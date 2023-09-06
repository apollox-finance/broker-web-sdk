### Mock whitelist API

For development, you have to mock the whitelist API with [ajax interceptor extension](https://chrome.google.com/webstore/detail/tweak-mock-and-modify-htt/feahianecghpnipmhphmfgmpdodhcapi), the response should be

```json
{
  "code": "000000",
  "message": null,
  "messageDetail": null,
  "data": { "sourceCode": "" },
  "success": true
}
```

![ajax-inteceptor](../../docs/images/ajax-interceptor.png)

### Run the example

Please download the latest sdk in https://github.com/apollox-finance/broker-web-sdk/releases
![download-link](../../docs/images/download-link-v2.png)

```sh
git clone https://github.com/apollox-finance/broker-web-sdk.git
cd broker-web-sdk/examples/basic
unzip cloud_sdk.{version}.zip -d s3 # please ensure you have download the SDK zip file
yarn
yarn start
```

Open http://127.0.0.1:3333, then you can see your exchange website is ready!

### Example file structure

- **public/loading.gif**: loading image
- **cloud_sdk.2.0.0.zip**: demo sdk zip
- **index.html**: the entry file, includes the import and initialization of SDK
- **lws.config.cjs**: the config of [local web server](https://www.npmjs.com/package/local-web-server), we use this to easily proxy APIs
