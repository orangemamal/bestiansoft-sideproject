import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import GlobalComponent from '@/plugins/GlobalComponents.js';
import mixin from '@/mixins/index.js';
import App from './App.vue';
import vuetify from './plugins/vuetify.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { VDateInput } from 'vuetify/labs/VDateInput'

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('VDateInput', VDateInput)
library.add(fas)
library.add(far)

app.use(createPinia());
app.use(router);
app.mixin(mixin);
app.use(GlobalComponent);
app.use(vuetify)

app.mount('#app');
