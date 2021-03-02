import Vue from "vue";

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        $eimzo: EIMZO;
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $eimzo: EIMZO;
    }
}
