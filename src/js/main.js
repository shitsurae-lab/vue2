console.log('Success!!');
import Vue from 'vue';
import App from '../vue/App.vue';

// new Vue({
//   el: '#app',
//   render: (h) => h(App),
// });

new Vue(App).$mount('#app');

//propsを渡す方法(https://bit.ly/3s4nHud)
// new Vue({
//   render: (h) => h(App, { props: { color: 'red ' } }),
// }).$mount('#app');
