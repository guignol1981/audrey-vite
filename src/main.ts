import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import './firebase';
import router from './router';
import store from './store';

await store.dispatch('loadPhotos');
await store.dispatch('loadTags');
await store.dispatch('loadServices');

createApp(App).use(router).use(store).mount('#app');
