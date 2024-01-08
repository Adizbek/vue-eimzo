<template>
    <div id="app">
        <div>EIMZO App</div>

        <div>
            {{ certs }}
        </div>

        <div v-for="(cert,index) in certs" :key="index">
            {{ cert.CN }}

            <button @click="signWithKey(cert)">load</button>
        </div>

        <button @click="showVersion">Check version</button>

        <button>Sign with E-IMZO</button>

        <div v-if="isIDCard">
            ID CARD
            <button @click="signWithKey('idcard')">load id card</button>
        </div>

        <div>
            Result: {{ result}}
        </div>
    </div>
</template>

<script setup>
import {useEIMZO} from "@/vue-eimzo";
import {onMounted, ref} from "vue";

const certs = ref([])
const isIDCard = ref(false)
const result = ref('')
const eimzo = useEIMZO();


onMounted(() => {
    handleImzo()
})

function showVersion() {
    eimzo.checkVersion().then(version => {
        console.log(version)
    })
}

// eslint-disable-next-line no-unused-vars
async function signWithKey(key) {
    // let loadKeyResult = await this.$eimzo.loadKey(key)
    // let cert = await this.$eimzo.getMainCertificate(loadKeyResult.id)
    // let certInfo = await this.$eimzo.getCertInfo(cert)

    let signResult = await eimzo.signPkcs7(key, 'Hello world')
    let token = await eimzo.getTimestampToken(signResult.signature_hex)

    console.log(signResult, token)

    result.value = `Signature: ${JSON.stringify(signResult, null, 4)} \n Token: ${token}`
}

async function handleImzo() {
    await eimzo.install()

    certs.value = await eimzo.listAllUserKeys()
    isIDCard.value = await eimzo.isIDCardPlugged();
}
</script>
