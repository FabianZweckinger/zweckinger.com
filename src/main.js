import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home.vue";
import LegalDisclosure from "@/views/LegalDisclosure.vue";
import EcqbPplTrainer from "@/views/EcqbPplTrainer.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/legal-disclosure', name: 'Legal Disclosure', component: LegalDisclosure},
        {path: '/ecqb-ppl-trainer', name: 'ECQB PPL Trainer', component: EcqbPplTrainer},
    ],
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    },
})

createApp(App).use(router).mount('#app')
