import Vue from 'vue';
import Activities from './Activities.vue'
import Tasks from './Tasks.vue'

Vue.component('activities', Activities);
Vue.component('tasks', Tasks);

var activities = new Vue({
  el: '#activities'
});

var todoTasks = new Vue({
  el: '#tasks'
});
