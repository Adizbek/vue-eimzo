<template>
    <div id="app">
        App

        <div>
            {{ certs }}
        </div>

        <div :key="index" v-for="(cert,index) in certs">
            {{ cert.CN }}

            <button @click="signWithKey(cert)">load</button>
        </div>

        <button @click="showVersion">Check version</button>

        <button>Sign with E-IMZO</button>
    </div>
</template>

<script>

export default {
    name: 'App',

    data() {
        return {
            certs: []
        }
    },

    mounted() {
        this.handleImzo()
    },

    methods: {
        showVersion() {
            this.$eimzo.checkVersion().then(version => {
                console.log(version)
            })
        },

        async signWithKey(key) {
            // let loadKeyResult = await this.$eimzo.loadKey(key)
            // let cert = await this.$eimzo.getMainCertificate(loadKeyResult.id)
            // let certInfo = await this.$eimzo.getCertInfo(cert)

            let result = await this.$eimzo.signPkcs7(key, 'Hello world')
            let token = await this.$eimzo.getTimestampToken(result.signature_hex)

            console.log(result, token)
        },

        async handleImzo() {
            await this.$eimzo.install()

            this.certs = await this.$eimzo.listAllUserKeys()
        }
    }
}
</script>

<style>
</style>
