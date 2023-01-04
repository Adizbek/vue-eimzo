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

        <div v-if="isIDCard">
            ID CARD
            <button @click="signWithKey('idcard')">load id card</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'App',

    data() {
        return {
            certs: [],
            isIDCard: false,
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

        // eslint-disable-next-line no-unused-vars
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
            this.isIDCard = await this.$eimzo.isIDCardPlugged();
        }
    }
}
</script>

<style>
</style>
