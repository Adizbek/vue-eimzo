declare module 'vue-eimzo' {
    import {Plugin} from "vue";

    export interface SignPkcs7Result {
        pkcs7_64: string;
        signature_hex: string;
        signer_serial_number: string;
    }

    export interface Cert {
        disk: string
        path: string
        name: string
        alias: string
        serialNumber: string
        validFrom: string
        validTo: string
        CN: string
        TIN: string
        UID: string
        O: string
        T: string
        type: string
    }

    export interface LoadKeyResult {
        cert: Cert
        key: string
    }

    export  type TimestampProvider = (
        signatureHex: string,
        callback: (timestamp: string) => void,
        fail?: (error: any) => void
    ) => void

    interface EIMZO {
        addApiKey(domain: string, apiKey: string): void

        checkVersion(): Promise<{ major: number; minor: number }>

        install(): Promise<void>

        listAllUserKeys(): Promise<Cert[]>

        loadKey(cert: Cert): Promise<LoadKeyResult>

        getTimestampToken(signature: string): Promise<string>

        signPkcs7(cert: Cert | "idcard", data: string,): Promise<SignPkcs7Result>

        createPkcs7(
            id: string,
            data: string,
            timestamper?: TimestampProvider
        ): Promise<SignPkcs7Result>
    }

    export function useEIMZO(): EIMZO

    const plugin: Plugin<[]>;

    export default plugin;
}
