# vue-eimzo

## Installation
https://www.npmjs.com/package/vue-eimzo
```sh
npm i vue-eimzo
# or
yarn add vue-eimzo
```

## Installing as a plugin
```js
import eimzo from 'vue-eimzo'

const app = createApp(App)

app.use(eimzo)

app.mount('#app')
```

## Methods

### Setup EIMZO client
```js
const eimzo = useEIMZO();

await eimzo.install()

// Get all user certs (.pfx)
const certs = await eimzo.listAllUserKeys()
```

### Sign text
```js
const eimzo = useEIMZO();

eimzo.addApiKey('domain.uz', 'api-key')
await eimzo.install()

this.certs = await eimzo.listAllUserKeys()
const cert = certs[0] // or any other cert

const result = await eimzo.signPkcs7(cert, 'Hello world')

// optional, if you want to get timestamp token
const token = await eimzo.getTimestampToken(result.signature_hex)
```


### Get cert info
```js
const eimzo = useEIMZO();

await eimzo.install()

const certs = await eimzo.listAllUserKeys()
const cert = certs[0] // or any other cert

const loadKeyResult = await eimzo.loadKey(cert)
const mainCert = await eimzo.getMainCertificate(loadKeyResult.id)
const certInfo = await eimzo.getCertInfo(mainCert)
```
