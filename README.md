# vue-eimzo

## Installing as a plugin
```js
import EIMZOVuePlugin from 'vue-eimzo'

Vue.use(EIMZOVuePlugin) 

// you can access EIMZO client as $eimzo inside vue instance
```

## Methods
```js
await this.$eimzo.install()

this.certs = await this.$eimzo.listAllUserKeys()

let loadKeyResult = await this.$eimzo.loadKey(key)
let cert = await this.$eimzo.getMainCertificate(loadKeyResult.id)
let certInfo = await this.$eimzo.getCertInfo(cert)

let result = await this.$eimzo.signPkcs7(key, 'Hello world')
let token = await this.$eimzo.getTimestampToken(result.signature_hex)

```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```
